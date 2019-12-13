class FileListPlugin {
  apply(compiler) {
    // emit is asynchronous hook, tapping into it using tapAsync, you can use tapPromise/tap(synchronous) as well
    compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, callback) => {
      // Create a header string for the generated file:
      let fileList = 'In this build:\n\n';

      // Loop through all compiled assets,
      // adding a new line item for each filename.
      for (let filename in compilation.assets) {
        fileList += '- ' + filename + '\n';
      }

      compilation.assets['filelist.md'] = {
        source: function() {
          return fileList;
        },
        size: function() {
          return fileList.length;
        }
      };

      callback();
    });
  }
}

module.exports = FileListPlugin;

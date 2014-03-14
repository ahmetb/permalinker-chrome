window.addEvent("domready", function () {
    // Use the manifest:
    new FancySettings.initWithManifest(function (settings) {
        settings.manifest.saveButton.addEvent("action", function () {
            //alert('Settings saved! Close this tab and use the extension.');
            window.close();
        });
    });
});

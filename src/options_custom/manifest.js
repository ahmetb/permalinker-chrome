// SAMPLE
this.manifest = {
    "name": "Permalinker",
    "icon": "icon.png",
    "settings": [
        {
            "tab": "Server",
            "group": "API Server",
            "name": "api_base_url",
            "type": "text",
            "label": "Base URL",
            "text": "http://your-server.herokuapp.com/api/1"
        },
        {
            "tab": "Server",
            "group": "API Server",
            "name": "myDescription",
            "type": "description",
            "text": "<b>You need a Permalinker Server installation to use this plugin.</b> After installing a Permalinker server, enter the API endpoint above and save."
        },
        {
            "tab": "Server",
            "group": "API Server",
            "name": "saveButton",
            "type": "button",
            "label": "",
            "text": "Save and Close"
        },
    ]
};

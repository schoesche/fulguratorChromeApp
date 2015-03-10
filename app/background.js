/**
 * Created by U116064 on 04.03.2015.
 */

chrome.app.runtime.onLaunched.addListener(function() {
    chrome.app.window.create('index.html', {
        'bounds': {
            'width': 1200,
            'height': 500
        }
    });
});


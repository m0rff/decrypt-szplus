chrome.extension.sendMessage({}, function (response) {
  var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval)
      var url = window.location.href
      var reducedString = '?reduced=true'
      var locationSubstring = url.substr(-reducedString.length)

      if (locationSubstring === reducedString) {
        var ampUrl = url.substr(0, url.length - reducedString.length) + '!amp'

        fetch(ampUrl)
          .then(response => response.text())
          .then(body => document.write(body))
          .catch(error => {
            console.log('Replacing not possible! :(')
            console.error('Error:', error)
          });
      }
    }
  }, 10)
})
async function makeEditable() {
    // const aem = document.querySelector("meta[property='urn:adobe:aem:editor:aemconnection']");
    // if (aem) {
      const head = document.getElementsByTagName('head')[0];
  
      // Add URN Connection
      aem.name = 'urn:adobe:aem:editor:aemconnection';
      aem.content = 'aem:' + aem.content;
      aem.removeAttribute('property');
  
      // Add CORS library
      var cors = document.createElement('script');
      cors.src = 'https://universal-editor-service.experiencecloud.live/corslib/LATEST'
      cors.async = true;
      head.append(cors);
    // }
  }
  
  makeEditable();
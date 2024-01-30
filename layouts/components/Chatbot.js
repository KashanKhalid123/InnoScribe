// components/Chatbot.js

import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/e8ff6ec0-8740-49ee-b0a0-66b8df591ebd/webchat/config.js';
    script2.defer = true;

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    return () => {
      // Clean up the scripts when the component unmounts
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;

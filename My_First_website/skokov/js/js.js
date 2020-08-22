

    if (navigator.userAgent.search(/Chrome/) > 0) {
        function addStyleSheets (href) {
            var $head = document.head,
                $link = document.createElement('link');
        
            $link.rel = 'stylesheet';
            $link.href = 'css/hrome/news.css';
    
            $head.appendChild($link);
        }
    };
    
if (navigator.userAgent.search(/Chrome/) > 0) {
    function addStyleSheets (href) {
        var $head = document.head,
            $link = document.createElement('link');
    
        $link.rel = 'stylesheet';
        $link.href = 'css/hrome/news.css';

        $head.appendChild($link);
    }
    addStyleSheets (href)
};

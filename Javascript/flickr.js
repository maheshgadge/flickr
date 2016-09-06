/**
 * Created by mgadge on 9/5/2016.
 */

(function(document, window) {
    'use strict';

    var apiKey = '61d31c9ce10e60805a08a775576f46e0';
    var apiURL = 'https://api.flickr.com/services/rest/';

    function searchText(parameters) {
        var requestParameters = Utility.extend(parameters, {
            method: 'flickr.photos.search',
            api_key: apiKey,
            format: 'json'
        });

        var script = document.createElement('script');
        script.src = Utility.buildUrl(apiURL, requestParameters);
        document.head.appendChild(script);
        document.head.removeChild(script);
    }

    function buildThumbnailUrl(photo) {
        return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
        '/' + photo.id + '_' + photo.secret + '.jpg';
    }

    function buildPhotoUrl(photo) {
        return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
        '/' + photo.id + '_' + photo.secret + '.jpg';
    }

    function buildPhotoLargeUrl(photo) {
        return 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server +
        '/' + photo.id + '_' + photo.secret + '_b.jpg';
    }

    window.Flickr = Utility.extend(window.Flickr || {}, {
        buildThumbnailUrl: buildThumbnailUrl,
        buildPhotoUrl: buildPhotoUrl,
        buildPhotoLargeUrl: buildPhotoLargeUrl,
        searchText: searchText
    });
})(document, window);
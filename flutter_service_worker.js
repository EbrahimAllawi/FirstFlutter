'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "08bea0951982470e0d369aafe86dfe95",
"/": "08bea0951982470e0d369aafe86dfe95",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "11e8d03c53ef5b1333a8cde6a1d0e15e",
"assets/AssetManifest.json": "ae04687786350570498b9859f0d1df6a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/images/cafe.png": "74016c8a1dee92890335470c5bc60898",
"assets/images/dining.png": "4d753be8f9114fcb378ab26bcd180676",
"assets/images/tracking.png": "4c86987e243b3c506cdf6ac462fdf748",
"assets/images/beer.png": "9fb728e336083acf92715d2816c77419",
"assets/images/fast-food.png": "bf3ba231544165bb698b7f89f8d70a3a",
"assets/images/cuisine.png": "1e3af986bf9d2a4d7bfacd9176ed31f9",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "4de78f671f9de8323095f5c7b027865a",
"main.dart.js": "9ece9a99adac05ad316d95d6eb9b9b59",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"canvaskit/canvaskit.js": "62b9906717d7215a6ff4cc24efbd1b5c",
"canvaskit/canvaskit.wasm": "b179ba02b7a9f61ebc108f82c5a1ecdb",
"canvaskit/profiling/canvaskit.js": "3783918f48ef691e230156c251169480",
"canvaskit/profiling/canvaskit.wasm": "6d1b0fc1ec88c3110db88caa3393c580",
"manifest.json": "c9724d479dc7704d816c23ac35a4e9cb",
".git/index": "1311d909dc51432cc92c34f4cdedfc4a",
".git/config": "525d58fceb587d711b9c10cd87b5a343",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/logs/HEAD": "42a0f0a9ded717b97a07332fcfd9c81f",
".git/logs/refs/heads/main": "254c4742f60bb8c6bea783b4efebc6d0",
".git/logs/refs/remotes/origin/main": "7bbb3d23a4babe8a47771ff25fd544aa",
".git/FETCH_HEAD": "a5a1a43a42bc1347142bb026391e2ee1",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/COMMIT_EDITMSG": "1e60dbbad25e192a1c732411c017ae8e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/objects/f8/293167f19f3be816791c25a09579a62294956b": "4ba0a020f3d927b6fec14b8bbb346b75",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ae/1cccc7ca6ebf26b1e4104baba791f1ee278785": "d6c9a4268f64077e9f6637d2afce5d73",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/3b/db4c628a4161e6e79d28f8e6227ce36a113138": "d216a60009688dffec25244ab69f0abd",
".git/objects/9b/723bb5d5d5e35b962a87cc46eb2209f9bbb4f1": "8a078c75f94c298fc4f2237f3eca1573",
".git/objects/49/4d6014a9409b9432dcd0250c88ee848ef9ba9c": "596264f1e5fba6e3c40de658b0a1ecb4",
".git/objects/65/647fb5bcca55e208cb176be85c26cdd9315dc2": "1d19117857b7683440941fd0eeede76f",
".git/objects/4d/9c7e3d4e14d465ebc35ab0cb54cdc6ba66d585": "5117e5f8e48a7aef9d6cce2c3fea4973",
".git/objects/50/416076fffdcdd56eb951898c10fee8f14abe4d": "fe94d5da32dc7f2204aac81c5f173e3b",
".git/objects/15/126501ccff0c3194d4f894032e95becef99566": "aaae6acd29e9480482f99c36e3f16a29",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/58/33bf2ae97591e0537f1a98b327c7f2d279e52c": "5ea05d8763dbdfba2f24adf307a48989",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e8/dd9755be8de24a0001f4869c0bdeb499bc6c97": "46229c5af2d166880dc0f457954d1d85",
".git/objects/74/237b23f3f1633c808c3b47697adc64dd17249e": "cbcdd729109a0a8ef6632e87680d44dd",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/87/f054e04ed114946a8053f1e1af75ae02515ad8": "5564957db507df4c078a0fee4df56451",
".git/objects/87/748811d9bdbffffa46bb959351dcefc851eef9": "f6ae000509c1c6189205c1dffee84fb3",
".git/objects/2f/442e266dcca5eaf84f2ca34094a8d961e493e0": "80272371c2d423dcc5dbcef3d53a00c0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c2/e85b17006afbb86c2bcf01936c7407dd576031": "6a7c117bc84b4dde4e327d33f5068ce5",
".git/objects/96/486dc408395f3a5263de32085b159dc5cf20f1": "235bb37bfb3ef00b5a48377386bf40e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/48/e854b1fbf5d0c593fab252441862329ea89f59": "eb6c4ee5f12e6488833ebd7c5d4cb934",
".git/objects/00/5ae8a029012eac12a17ec8aa91eb920ec1d8a2": "f0df17d22ca1d61550e63c7da5096480",
".git/objects/fd/f21790cb49e4bbe99779a4cc6d311d64bfa08c": "f44d323edd36b4964f2869f944288a49",
".git/objects/ac/62650523a24a58bd7964890931455cfabee126": "6b64da79e1fb31edc2ad24264efbb083",
".git/objects/07/b0bbca0dff3fb05285b389bcd3b943b17987d9": "57f338b6fa2cd05a571792c1b77255f3",
".git/objects/ee/6a9e749095bd0b3efc9ac321ba25220e6ded4d": "41a34d489a52798beac7e19082909c3f",
".git/objects/89/b670f5687e1aff1e876ae2e405e721d9c91968": "78d0b7e12c340440947680777a5d83aa",
".git/objects/09/34815ff398c1c5e8389e7450ad2efa9eea56fa": "656a1be41e75307e78be65bc08449e50",
".git/objects/af/de38ee62143336cf442f0aebea2e75b1c4e275": "36b9491ee4a92c2645cf869a9a8ede86",
".git/objects/56/a640efd8b80ca34c75a04966f09c7c4789868b": "d5add39e2fd4fa72927ae744e129e3de",
".git/objects/5d/f2ae1098a1b3c830390f34d301e07c5c80bd37": "5faf61d9c469239f7570579ca3fc0f2a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/99/0e602c5fbea40ac7718a6ac3d5c4877b5d4d51": "5a819f8f651b6abf4552d05bb7481c14",
".git/objects/99/bde966d48cf9218ee9ae230043d1ad773af00e": "0b74bf60f6d8ed64564e7359d5965696",
".git/objects/3e/1a375f501c32a15142f09bdeeb8a1215d076cb": "966f4d36dcb37a9c24ba50a571e23bc2",
".git/objects/3e/432a152179956cfe12e2950b8ff174b71cc83e": "826b5cc9c80202498cefa215496978b0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/95/81fb0db74aa4568fd0cbf6818fb93f55f711e3": "a1ce2085ddf10c284f4a9ff8d42c7ed3",
".git/objects/23/822244a8771c3838384af866a0a13ec3834348": "5c3387d67497b0131194f021d9861781",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/64/8801a58e7b771c4f5acbf9422320b54e58f964": "804cd922b01bc9442cbc241a5af62aa5",
".git/objects/64/a332d3dfac7c4d3a59ee830904c9123b345267": "790c73f98e61b952c6f277807b83d43e",
".git/objects/9e/f3829d051fb7e546a22251ffcc93613a97bc70": "e4904ad7a1972fc5eadb19a0eb0e3079",
".git/objects/86/389db391fbd1cad739bd5a084058bad0fcf954": "fb3527bdab571fc14f449eeb9065aa4d",
".git/objects/c6/2c43fb134144ece15305abe379ec878207051f": "6a783d7420d11ac3a424fb997aa0481c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/f3/eacc6a5729af618809a5f47601c83de13621b3": "ce0768a850869af29a84617007ad35cb",
".git/objects/ef/e8988adeeeec00c1dc43b791f6459da13703c5": "298896440168e2ae53424da63a33792a",
".git/objects/6b/e2b53265f5f97e6df72859bd9be0372ad763a8": "06ba560e80d9e0dd48798433b8887d43",
".git/objects/6b/dddb1fcffbfdb329951a46354e29e734a3eddd": "ab121e3454de4ee41895ba7f431111c2",
".git/objects/6b/ab2fdd0e9f588e267d1e2f101aa3f2007ddd34": "cdc65396edcf93c96e44dd2feaeef061",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/4a/f3cfd8646233d2b42c5ac949df354e6cf52671": "48b814b3107792cf08e585552f751808",
".git/refs/heads/main": "fc17629b30accc8f3e5a160500bc8c92",
".git/refs/remotes/origin/main": "fc17629b30accc8f3e5a160500bc8c92",
".git/ORIG_HEAD": "320622cbcd42b6c8e354b9c678eb7787"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

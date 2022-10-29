'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3c41e95d764005cb38f57a229439a2fc",
"assets/assets/1077047.png": "df067919917972fbe1374881e9775a54",
"assets/assets/17.png": "8038734b17d74920b0305ce159f2ad57",
"assets/assets/2.jpg": "a557b51c9e58fdf44b0f094307473c67",
"assets/assets/23.png": "8443dff419e13621d71250f5cfb6a138",
"assets/assets/3.jpg": "0b613522099330fc760f49bf4f37d234",
"assets/assets/4.jpg": "07c9de97ca15866355e95132ccb1c3ed",
"assets/assets/5.jpg": "9fcb55804f4251090a108402a07d80da",
"assets/assets/6.jpg": "c4a24d4ec110bdd33e60f754015e3bf3",
"assets/assets/8.jpg": "c648dde9e4b7652ecba63aaf026695d2",
"assets/assets/9.jpg": "714e564835f5b97a800f9962fb84456b",
"assets/assets/90.PNG": "540d851ae648995bbcbc7924bebf77fe",
"assets/assets/ab.jpg": "72ea696599c41e9c2925794581eda2d8",
"assets/assets/apply.jpg": "cc6a5cdfd3c4fded1c524609d87c1a72",
"assets/assets/b.jpg": "e9a83da6c92fc99d5557aae8c330c443",
"assets/assets/bnxo4aiikE7j7sUCVnos.png": "53758c4f5767fc384e510dff2034c2c2",
"assets/assets/c.png": "b9e33b681f532ae5928984d8761abcc5",
"assets/assets/carconrols.jpg": "066ce9aa74a7ad4af0dec2b219352257",
"assets/assets/conntent.jpg": "43704b975e893cf24d0fcb1ee8f182dd",
"assets/assets/cross.png": "983303dc2636ae62aa1630be66aa6f12",
"assets/assets/ev.jpg": "28550ad410ca8a71a317147f23c966ce",
"assets/assets/f.jpg": "d419a8843afa15f0c9060000af68de4b",
"assets/assets/fb.png": "52372f85a82ac2f786533003d40a325a",
"assets/assets/FB.webp": "d2eb06404db9e1cdb82daae57c3845da",
"assets/assets/fb1.jpg": "0b4702ce21c74308c240aa5482260436",
"assets/assets/h.jpg": "91ae8c4f584dac4cb409ccb2c01c22e3",
"assets/assets/image0.jpg": "c5b1015b4c82078f38fae7daec435a23",
"assets/assets/image1.jpg": "aa5a37e5369a05336f44c4a18e3f03b0",
"assets/assets/image10%2520-%2520Copy.jpg": "28b2b308904d2d32d3a570073847d318",
"assets/assets/image10.jpg": "28b2b308904d2d32d3a570073847d318",
"assets/assets/image11%2520-%2520Copy.png": "e5d16314c9d810810f0e79cc56dea077",
"assets/assets/image11.png": "e5d16314c9d810810f0e79cc56dea077",
"assets/assets/image12%2520-%2520Copy.jpg": "5af2ed5cce7e9d71557622f39d1033d0",
"assets/assets/image12.jpg": "5af2ed5cce7e9d71557622f39d1033d0",
"assets/assets/image13%2520-%2520Copy.png": "48b39e5db2a46c8814447349fbdab5b6",
"assets/assets/image13.png": "48b39e5db2a46c8814447349fbdab5b6",
"assets/assets/image14.PNG": "d5bb7e39982169c59bc0dd99c124fc50",
"assets/assets/image15.png": "56003f268115f9b91f91cb71ae9e2e6c",
"assets/assets/image16.jpg": "7a20681ff962a5b5a4113fff4a8182c8",
"assets/assets/image18.png": "43a4649864356dd0d571e6e03c3ea08c",
"assets/assets/image19.png": "3211e41fc1f882178973f4467368b8f9",
"assets/assets/image2.jpg": "fb5ac4df655f2802b40d0707d8ea2ec8",
"assets/assets/image20.png": "b59896e0374b4af32bfd0c13fc1d1872",
"assets/assets/image22.png": "62e704816303f9a434bde94aa7bb956f",
"assets/assets/image24.gif": "ee78c08f4260522611699c8e621ef6ef",
"assets/assets/image24.png": "ab64efa5b5f9b25e1bc7a9ec6547ba86",
"assets/assets/image3.jpg": "99195c1851c1e56fbdb4f0aa199a6585",
"assets/assets/image4.png": "491d6675cc869173d013e1f28497b282",
"assets/assets/image5.png": "028d9e282bb0b65a50fd65b04aceffc8",
"assets/assets/image6.png": "f0a411ee750fcb2336d34d6a405dae3d",
"assets/assets/image7.png": "36f341079b737ec57d595d949132baee",
"assets/assets/image8.jpg": "c2bcea0be9eb54d57e9546609fc3a125",
"assets/assets/image90.png": "b8dda073b7fa40aa9f9b9596f2ce2456",
"assets/assets/IMG-4757.jpg": "265f3b173dbad5db363b457a63af0d06",
"assets/assets/k.png": "632090fa88b71fd0328c72be40e3be4e",
"assets/assets/k53.jpg": "427a50ebfabefb79af68d22709f47db3",
"assets/assets/kk.jpg": "f305d22e93ae7ab3205d5f31cd22ca10",
"assets/assets/l.png": "0138d7252dedf18f6318801d7c8a5618",
"assets/assets/left.jpg": "99fbaa59549593eff3afac2d1166dd07",
"assets/assets/lk.png": "6951b38ce6a653b6c23292609c0849ea",
"assets/assets/man.jpg": "c5bfcadf8d0ed200bd82482ffe7db26c",
"assets/assets/oo.png": "0138d7252dedf18f6318801d7c8a5618",
"assets/assets/overtaking.png": "b7d3a317b6c07afaa2347235056786ec",
"assets/assets/photo.png": "a701ba1eb45e31ac0c27d416f08c841a",
"assets/assets/ping.jpg": "265f3b173dbad5db363b457a63af0d06",
"assets/assets/profile.png": "87dc4aeb8c18e61ef6752d3d14090fcd",
"assets/assets/purewhite.png": "1b9cfab4501c396d4c2651be9bf390d3",
"assets/assets/r1.jpg": "9511d120ca5485da6f3d9bb117767327",
"assets/assets/r3.jpg": "50c4295a1262cd0573481a79c4804e00",
"assets/assets/redd.PNG": "1904c770899a9994d558b020317e4f9e",
"assets/assets/redop.PNG": "04db6957e3861163899f32b64c1339b4",
"assets/assets/road.jpg": "da19ca730032543e59f0e74dccccd60b",
"assets/assets/roadb.jpg": "3fcfdf516c07de8e67744bf9b9ae93c0",
"assets/assets/roadsign.jpg": "471da66f90bc850a4150ade467a0c5c6",
"assets/assets/rules.jpg": "fc59d24f44e9a95f249a5169f6b70f14",
"assets/assets/rules2.jpg": "7d0b8f82585d67dba7c0fd7438639741",
"assets/assets/S2.jpg": "476e91fa27fe98f69356de0a68db4afb",
"assets/assets/S3.jpg": "56a2c567446ce2376dcf648b6e074c6d",
"assets/assets/S4.jpg": "d1b07051256ace4ee234d85fb4f71c47",
"assets/assets/Sh.png": "fc727d5829e9714b40da0e93bae10230",
"assets/assets/stop.jpg": "aeafdd05fb49c44d0e29972bf94385b6",
"assets/assets/strac.png": "ec28683d179728c682908553ac7cff86",
"assets/assets/stract.gif": "451e70f325616770b69bdd1603facd2f",
"assets/assets/study.jpg": "d3fd92ef7f94babea8b31659cf132998",
"assets/assets/study1.jpg": "3513f193f40e4d902129d6a9ed931caa",
"assets/assets/test.png": "158cd4415f0c752640d5957d3ae52d47",
"assets/assets/testexam.jpg": "f3b04b41c691c1c21de077523164075d",
"assets/assets/tick.png": "20f06db6cadf7cc77ec1c85064f8926e",
"assets/assets/tt.jpg": "f4705b8876eda0a13e605f74604474cd",
"assets/assets/up.png": "1fc790de26d63f17ae3d51908fb8fc60",
"assets/assets/V1.jpg": "bba9a701b048ed311c74d4523707cf5c",
"assets/assets/white.PNG": "5d26c7a6caa5d2c38576f7651125e581",
"assets/assets/yellow.PNG": "0c0d561ebfa087f311710089dbe04acd",
"assets/assets/zx.jpg": "0a12bed95ce6127533da5a350f27bc77",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "4df1623be36cb870e24de2077360862e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b94eec9421df4eec6926854560637fbf",
"/": "b94eec9421df4eec6926854560637fbf",
"main.dart.js": "be8336939a7ed378a2638518792dedc7",
"manifest.json": "9fff1d8c75c794bb1841b2da04d53eeb",
"version.json": "221871a84735b4957402d2c5e5a51e72"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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

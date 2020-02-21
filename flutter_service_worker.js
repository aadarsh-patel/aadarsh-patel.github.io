'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/.git/COMMIT_EDITMSG": "391c2a0d6cd6ae5d53d857bf567dc79b",
"/.git/config": "92cb3e8df53330bdba97a418f4b596b2",
"/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"/.git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
"/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"/.git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
"/.git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
"/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"/.git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
"/.git/index": "c39874c77a3c2c42eb5fdece9a364243",
"/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"/.git/logs/HEAD": "33acf8c966c9c3c85c83b70e91f5f73b",
"/.git/logs/refs/heads/master": "33acf8c966c9c3c85c83b70e91f5f73b",
"/.git/logs/refs/remotes/origin/master": "9f097bb765e7649cfe3ced0f1c30ef42",
"/.git/objects/05/903f1c9879a0ef56e594dfecd46ab02ffcd01e": "6f593482a7fe8caacf12fd25a6f28136",
"/.git/objects/0d/ebe08a11a1b5899a588304f134f64e82da8674": "118af7b66690a7d8c3535938752acdeb",
"/.git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
"/.git/objects/13/5ed09721ad2647b9d59440a4632e4543ce1cbf": "b45db56387ea9b621d814ad292851e18",
"/.git/objects/15/55f2228fda134e061c1947bf72912926148a7c": "a5e8f14012fd9c79bae3ceadb04bd153",
"/.git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
"/.git/objects/1a/bb14d08c59c9dc115f0b4ce1a5cf858fc3a86d": "07b5906935eade51b288fdf736ea6baa",
"/.git/objects/1d/7990a0bce7e8ea7587c1b7dc4f1865a9b72607": "f36f2942b6c4a2abe54aaadb14a2146c",
"/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"/.git/objects/23/e70b97f1d39a87d476ba32e78b0b70c0e258de": "28daaf62f645dc14d683fe86c7c9a7b6",
"/.git/objects/32/ef2dcac9afcc92ac919d7e2205f6a805472fb7": "ff55506fc826bc0157a3f3e7e3111125",
"/.git/objects/3c/3dc863b78f73d649d516d8f8dbb043560d0aae": "995fbbd85e61b2e1c5d02c84414c0622",
"/.git/objects/3f/d2cc1dbaffdf3a279a1a49f752899653965395": "0694747a36cab758e1b991c85aa6fdc3",
"/.git/objects/42/1d52a84a1d120be95b571b0320dcc3175ed322": "b8a7b23aa26847d86273a55b9f2f84ed",
"/.git/objects/4e/9f49417fcf86d5ffec8172547108d3710a346f": "d5dda53dec566ccc3b30ca90739cbbb8",
"/.git/objects/54/0b5d78c7064df7cb7a2b290b4c30aee9d30b31": "142bca7d620b4c844f18629c377c725e",
"/.git/objects/55/58be4a64d2949980a12623be13debf453c4300": "c3ccb264d0847043fc4d4f1a3af96042",
"/.git/objects/57/0b3c6d008d0f191fddb0757ef93b5e771fa9d2": "2e5272ef424022bb492e532550e8a311",
"/.git/objects/5e/034f0cc56942c69865a0d9dc8bb657ff6f87c8": "3f8266caa8d4fd04033d83fc91887bf1",
"/.git/objects/60/05a47c20f3640c82385dcfae8dc3d03dca725b": "57f226e7a8a3446841fcb7ad95889ce1",
"/.git/objects/63/ba5d4c6af2342d560dd7867694698d9ff908dc": "b769f07fa0f2cdf47e6285f0251a8ef1",
"/.git/objects/68/f130bdd61510a7502515eb02c29f21c061f531": "36a2fa5e54f595169adb05671cf7ae3f",
"/.git/objects/69/a7e6c095a3acce180990eab0d6d19c188c93c6": "35f035afbe905e06a6e3a07a18cd4610",
"/.git/objects/6c/396f3509647803306a8daa063b5d69e6f13e69": "5cf314095e9d4455128a51f390b218ee",
"/.git/objects/77/b9c26600f6d7bdca1f1e0cfde94ab6c5a8d227": "7372caeb3e445afadc1c621179a20f3f",
"/.git/objects/78/bec32178bb03a133984380e46dcbce7bc922f6": "7edaba4f2c07962111cbfb31a51c81c6",
"/.git/objects/7a/02f6c8bbf8c96fd7a96ad6fd61186bd2ebef9d": "cb0ccf6b9f4e203d6a0447a53bdaf10a",
"/.git/objects/7b/2a3795324134b60f5355b2cd9351ab1eab229c": "a44e8a2c0b426baf8faee96b6c832f2d",
"/.git/objects/7f/d13fef1142b7e4e39bebd417ec8c6b1389ee91": "d9245b28dedad474ec64c36b69c4b35c",
"/.git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
"/.git/objects/86/4a95b1ba98d523f4a274fa9d4ae53a77813b00": "30f9fff20f9a1fb0bdab4e028c79a1b0",
"/.git/objects/87/8f9966cc0fde9d2d235eb119cd4bf1e487064e": "58fb7569cd2b8873c987f656650786cb",
"/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"/.git/objects/90/af810a8aa66d970dd2e05f94f511059186717f": "2526101f52a7d6d8140684fb1ba20d0e",
"/.git/objects/93/3bf5d0a1e6ff1970069da71f2b87b9992d777d": "41eebd7db7e136c6ee50f8bed6eea2fa",
"/.git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
"/.git/objects/a2/48124d92d2a4cbe350ef4af47ae307d2328fb2": "6dfe9a335237074753b2c89c299d8f12",
"/.git/objects/a2/c12947150d769758a203993280d4781813b47d": "7d0e5198cd619227f0d89215eb5783eb",
"/.git/objects/a5/48a2982a9899bd603c1592eae46e7426809845": "371ca62192a2f0fb7b8f739986a5d38d",
"/.git/objects/b5/7c67484e02b7c54dacf2d680bf54767062cd07": "cc5a88113b7596853025154db2c0b76b",
"/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"/.git/objects/b9/d7abcbe31658463e8bc56ed138ae8fd5808923": "d61c822ed3341918fcda95c4f8409f6a",
"/.git/objects/c6/434286e8ed1f70106a8a50fa5a1ebaa4951f23": "d66ad5a390fef0b90bd43b7d918dcf92",
"/.git/objects/c7/7608bdfff1f54eab10f6831fe41bd35c6e6db9": "1aebb4f81f543d51edd4ef9e60e8fb2d",
"/.git/objects/cc/a759b3204ae0f33e817cd28b340eba2257c80d": "0da36ec39436a08360519044798f7479",
"/.git/objects/ce/e3a6881703b5e43f9d8b26064e1c61103a0174": "9450fc3c6c6e39b53166e2c4f6cb1faf",
"/.git/objects/d3/75bea87baaa84a119d3d54795e0c6d3eb84e15": "a14a00d9214e8001ebdf59d311b7c4b1",
"/.git/objects/d5/b9ece2d3d73b985246deb952ed4af13577546e": "8551cc62b4b263382f4c1a3effdf9295",
"/.git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
"/.git/objects/e3/cdc73fb53489fd97c8dd18e325b2de8ae8e79c": "81c60c5c664a67e4ed54c606c7233c79",
"/.git/objects/e9/dd3e603803cc1b94f89e57910eb380e9e967a5": "f2ed3d1613d372d7edf9c58717b7a17e",
"/.git/objects/ea/9bec70d6fb8cf64035f997ebe97157145d3ecd": "33611bf340977838c2490a346b652443",
"/.git/objects/ec/ae703e4d835592e850041ad3ee6b0927810049": "b44a02de3285a39d81c9b6bf646ce391",
"/.git/objects/f3/fb6bba71a166983e770bf4ad0cad7e4f56853c": "3e0eae6126d7469c3929f0cc75e0605d",
"/.git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
"/.git/objects/ff/3153a0986e873a727ed32a85c4da6dc214b331": "7df0eb3357b530829fc0fc27faf18a19",
"/.git/refs/heads/master": "bfc1e9491cd758bf8b21a989f15d1f22",
"/.git/refs/remotes/origin/master": "bfc1e9491cd758bf8b21a989f15d1f22",
"/assets/AssetManifest.json": "9c141ac7c6c4e5dd3ffef0ef67169ead",
"/assets/assets/fonts/Varela-Regular.ttf": "bb4e479a2da1aaca15c79131e369cd03",
"/assets/assets/images/code_logo.png": "1bbdfb6ac1300c32ddfcea7c47337e0a",
"/assets/assets/images/code_title.png": "37df918450809d704b58033942a87889",
"/assets/assets/images/git_logo.png": "f177ec1bd1e8554289c143313eb6a7c0",
"/assets/assets/images/git_title.png": "5d6645e84a830c44fcaf0f6e2fb03028",
"/assets/assets/images/IMG_5698.jpg": "d527de5991cf5ff2d086cfa8a23e5d6d",
"/assets/assets/images/link_logo.png": "abdc17e87cf1277b10752346cfefc87e",
"/assets/assets/images/link_title.png": "586ed2f39865ff0b767fdccfd7a6adec",
"/assets/assets/images/snow1.jpg": "b5a14d6cfbeb0d824c65bec49a3c7440",
"/assets/assets/images/snow2.jpg": "9436a5db04aa8f9734e6ca68b0922c5c",
"/assets/assets/images/snow3.jpg": "a9a06d98682de19781eb1e91296b939f",
"/assets/assets/images/stack_logo.png": "c1b236166363debdcc230f639c87f759",
"/assets/assets/images/stack_title.png": "c9d0d4c993ffea8c72a223920f7acef9",
"/assets/assets/images/test.png": "7925f6ac5a2be8aa9812e6ac1ca900be",
"/assets/FontManifest.json": "e28631c65fe27a2c055b450789c2f619",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/LICENSE": "83b3940cc02c852dd65caedea072a903",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"/index.html": "edd3712349f81e12180e36e5021e82cb",
"/main.dart.js": "1a71893aa48ae942ea00d60d591b849c",
"/manifest.json": "14e919b7b1dde549ab334b7ee3ce8412"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});

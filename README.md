# LargeComp

大量のコンポーネントの影響確認

2000コンポーネントを生成して、ビルドができるのか確認。

注意)マシンスペックによってはフリーズする可能性があるので自己責任で。

## 検証環境

OS: MacOS Mojave(10.14.4)
CPU: 2.3GHz Intel Core5
メモリ: 16GB 

```shell
$ ng version

     _                      _                 ____ _     ___
    / \   _ __   __ _ _   _| | __ _ _ __     / ___| |   |_ _|
   / △ \ | '_ \ / _` | | | | |/ _` | '__|   | |   | |    | |
  / ___ \| | | | (_| | |_| | | (_| | |      | |___| |___ | |
 /_/   \_\_| |_|\__, |\__,_|_|\__,_|_|       \____|_____|___|
                |___/
    

Angular CLI: 7.3.8
Node: 10.15.3
OS: darwin x64
Angular: 7.2.13

```

## 準備

プロジェクト作成

```shell
$ ng new largeComp
$ cd largeComp
$ ng build
```

## 初期状態でのビルド

### Debug Build

```shell                                                                                   
Date: 2019-04-19T09:39:02.913Z
Hash: 7329eb952e73a3d333bd
Time: 6271ms
chunk {es2015-polyfills} es2015-polyfills.js, es2015-polyfills.js.map (es2015-polyfills) 284 kB [initial] [rendered]
chunk {main} main.js, main.js.map (main) 8.55 kB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 236 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.08 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 16.3 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.2 MB [initial] [rendered]
```

### Production Build

```shell
$ ng build --prod
                                                                                 
Date: 2019-04-19T09:39:24.348Z
Hash: 869e69482f4671888513
Time: 10817ms
chunk {0} runtime.26209474bfa8dc87a77c.js (runtime) 1.41 kB [entry] [rendered]
chunk {1} es2015-polyfills.c5dd28b362270c767b34.js (es2015-polyfills) 56.4 kB [initial] [rendered]
chunk {2} main.f265678ddbca1da14647.js (main) 151 kB [initial] [rendered]
chunk {3} polyfills.8bbb231b43165d65d357.js (polyfills) 41 kB [initial] [rendered]
chunk {4} styles.3ff695c00d717f2d2a11.css (styles) 0 bytes [initial] [rendered]
```

## 2000コンポーネントを生成のみ

コンポーネント生成（1時間以上かかるので注意）

```shell
for((i=0;i<2000;i++)); do ng g c comp$i;done
```

この状態でビルド（2000コンポーネントはAppModuleに登録されているが使用されていない）

### Debug Build

main.jsのサイズがえぐい。

```shell
$ ng build
                                                                                                 
Date: 2019-04-19T09:46:05.608Z
Hash: f7512c99dce9d60b3f1d
Time: 26958ms
chunk {es2015-polyfills} es2015-polyfills.js, es2015-polyfills.js.map (es2015-polyfills) 284 kB [initial] [rendered]
chunk {main} main.js, main.js.map (main) 5.12 MB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 236 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.08 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 16.3 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.2 MB [initial] [rendered]

```

### Production Build

一応ビルドできる。また、main.jsのサイズがかなり圧縮されている。

```shell
$ ng build --prod
                                                                                 
Date: 2019-04-19T09:47:13.154Z
Hash: 869e69482f4671888513
Time: 48604ms
chunk {0} runtime.26209474bfa8dc87a77c.js (runtime) 1.41 kB [entry] [rendered]
chunk {1} es2015-polyfills.c5dd28b362270c767b34.js (es2015-polyfills) 56.4 kB [initial] [rendered]
chunk {2} main.f265678ddbca1da14647.js (main) 151 kB [initial] [rendered]
chunk {3} polyfills.8bbb231b43165d65d357.js (polyfills) 41 kB [initial] [rendered]
chunk {4} styles.3ff695c00d717f2d2a11.css (styles) 0 bytes [initial] [rendered]

```

## 2000コンポーネントを参照

2000コンポーネントをAppComponentから参照させる

### Debug Build
```shell
$ ng build
                                                                                                Date: 2019-04-19T09:54:02.022Z
Hash: 6b41ea3c75bf59f743ad
Time: 30635ms
chunk {es2015-polyfills} es2015-polyfills.js, es2015-polyfills.js.map (es2015-polyfills) 284 kB [initial] [rendered]
chunk {main} main.js, main.js.map (main) 5.18 MB [initial] [rendered]
chunk {polyfills} polyfills.js, polyfills.js.map (polyfills) 236 kB [initial] [rendered]
chunk {runtime} runtime.js, runtime.js.map (runtime) 6.08 kB [entry] [rendered]
chunk {styles} styles.js, styles.js.map (styles) 16.3 kB [initial] [rendered]
chunk {vendor} vendor.js, vendor.js.map (vendor) 3.2 MB [initial] [rendered]

```

### Production Build
90%でメモリを確保できず終了　

```shell
$ ng build --prod
  90% chunk assets processing                                                    <--- Last few GCs --->

[42491:0x10264e000]   133436 ms: Scavenge 1295.1 (1423.9) -> 1294.8 (1424.9) MB, 4.6 / 0.0 ms  (average mu = 0.166, current mu = 0.050) allocation failure 
[42491:0x10264e000]   134193 ms: Mark-sweep 1295.5 (1424.9) -> 1295.1 (1424.4) MB, 752.7 / 0.0 ms  (average mu = 0.100, current mu = 0.021) allocation failure scavenge might not succeed
[42491:0x10264e000]   134203 ms: Scavenge 1295.8 (1424.4) -> 1295.5 (1424.9) MB, 4.4 / 0.0 ms  (average mu = 0.100, current mu = 0.021) allocation failure 


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 0x2855ec4dbe3d]
Security context: 0x1e0d89a1e6e9 <JSObject>
    1: __define [0x1e0d384e8979] [~/Sandbox/largeComp/node_modules/eslint-scope/lib/scope.js:~414] [pc=0x2855ec4f4207](this=0x1e0d3b1d0a99 <Scope map = 0x1e0d410e07c1>,node=0x1e0d3b1c7ba9 <Node map = 0x1e0d658c40a1>,def=0x1e0d3b1d1649 <Definition map = 0x1e0d410e24a1>)
    2: /* anonymous */ [0x1e0d3b1d1531] [~/Sandbox/lar...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
 1: 0x10003c597 node::Abort() [~/.nvm/versions/node/v10.15.3/bin/node]
 2: 0x10003c7a1 node::OnFatalError(char const*, char const*) [~/.nvm/versions/node/v10.15.3/bin/node]
 3: 0x1001ad575 v8::internal::V8::FatalProcessOutOfMemory(v8::internal::Isolate*, char const*, bool) [~/.nvm/versions/node/v10.15.3/bin/node]
 4: 0x100579242 v8::internal::Heap::FatalProcessOutOfMemory(char const*) [~/.nvm/versions/node/v10.15.3/bin/node]
 5: 0x10057bd15 v8::internal::Heap::CheckIneffectiveMarkCompact(unsigned long, double) [~/.nvm/versions/node/v10.15.3/bin/node]
 6: 0x100577bbf v8::internal::Heap::PerformGarbageCollection(v8::internal::GarbageCollector, v8::GCCallbackFlags) [~/.nvm/versions/node/v10.15.3/bin/node]
 7: 0x100575d94 v8::internal::Heap::CollectGarbage(v8::internal::AllocationSpace, v8::internal::GarbageCollectionReason, v8::GCCallbackFlags) [~/.nvm/versions/node/v10.15.3/bin/node]
 8: 0x10058262c v8::internal::Heap::AllocateRawWithLigthRetry(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [~/.nvm/versions/node/v10.15.3/bin/node]
 9: 0x1005826af v8::internal::Heap::AllocateRawWithRetryOrFail(int, v8::internal::AllocationSpace, v8::internal::AllocationAlignment) [~/.nvm/versions/node/v10.15.3/bin/node]
10: 0x100551ff4 v8::internal::Factory::NewFillerObject(int, bool, v8::internal::AllocationSpace) [~/.nvm/versions/node/v10.15.3/bin/node]
11: 0x1007da044 v8::internal::Runtime_AllocateInNewSpace(int, v8::internal::Object**, v8::internal::Isolate*) [~/.nvm/versions/node/v10.15.3/bin/node]
12: 0x2855ec4dbe3d 
Abort trap: 6

```
## まとめ

|状態|ビルド種別|処理時間(ms)|main.jsのサイズ|
|---|---------|------:|----:|
|初期状態|debug|6,271|8.55 kB|
| |prod|10,817|151 kB|
|2000コンポーネント<br>（未使用）|debug|26,958|5.12 MB|
| |prod|48,604|151 kB|
|2000コンポーネント<br>（使用）|debug|30,635|5.18 MB|
| |prod|133,436|エラー|

# chrome-plugin API

<!-- [TOC] -->

记录chrome插件相关的一些API

## 1. chrome.storage.local

chrome.storage.local 是 Chrome 插件 API 中的一个存储接口，用于本地存储数据。与浏览器的 localStorage 类似，但更强大且容量更大（一般为 5MB），在 Chrome 扩展的各个组件（如 Background Script、Content Script、Popup、Options 页面等）之间都可以共享数据。

### 1.1 设置数据：chrome.storage.local.set()

```
// 在插件的某处保存数据
chrome.storage.local.set({ key: 'value' }, function() {
  console.log('Data is saved.');
});

// 保存多个键值对
chrome.storage.local.set({ key1: 'value1', key2: 'value2' });
```

### 1.2 获取数据：chrome.storage.local.get()

```
// 获取指定的键
chrome.storage.local.get(['key'], function(result) {
  console.log('Value currently is ' + result.key);
});

// 获取多个键的数据
chrome.storage.local.get(['key1', 'key2'], function(result) {
  console.log('Key1:', result.key1);
  console.log('Key2:', result.key2);
});

// 获取所有数据
chrome.storage.local.get(null, function(result) {
  console.log('All data:', result);
});
```

### 1.3 删除数据：chrome.storage.local.remove()

```
// 删除指定的键
chrome.storage.local.remove(['key'], function() {
  console.log('Key is removed');
});
```

### 1.4 清空数据：chrome.storage.local.clear()

```
chrome.storage.local.clear(function() {
  console.log('All data is cleared');
});
```

### 1.5 监听存储变化：chrome.storage.onChanged

```
chrome.storage.onChanged.addListener(function(changes, areaName) {
  if (areaName === 'local') {
    console.log('Changes in local storage:', changes);
  }
});
```

## 2. chrome.storage.sync

chrome.storage.sync 是 Chrome 扩展提供的一个同步存储接口，它允许将数据与用户的 Google 帐户同步，从而在用户的多个设备上共享数据。相比 chrome.storage.local 的本地存储，chrome.storage.sync 的数据会在用户的所有 Chrome 浏览器中同步，只要用户使用同一帐户登录。

### 2.1 设置数据：chrome.storage.sync.set()

### 2.2 获取数据：chrome.storage.sync.get()

### 2.3 删除数据：chrome.storage.sync.remove()

### 2.4 清空数据：chrome.storage.sync.clear()

### 2.5 监听存储变化：chrome.storage.onChanged

```
chrome.storage.onChanged.addListener(function(changes, areaName) {
  if (areaName === 'sync') {
    console.log('Changes in local storage:', changes);
  }
});
```

## 3. chrome.tabs

chrome.tabs 是 Chrome 扩展 API 中用于操作浏览器标签页的模块，提供了丰富的功能，可以帮助开发者在插件中创建、查询、更新和管理标签页。

### 3.1 创建新标签页：chrome.tabs.create()

chrome.tabs.create(options, callback) 方法用于创建新的标签页。

参数：

- options：一个对象，包含创建标签页的选项。
  - url：要打开的 URL。
  - active：是否将新标签页设置为活动标签页。
- callback(tab)：一个回调函数，在标签页创建完成后执行。
  - 一个对象，包含新标签页的信息。信息包括标签页的 ID、URL 等。
  - 如果创建失败，返回错误信息。

示例：

```
chrome.tabs.create({ url: 'https://example.com', active: true }, function(tab) {
  console.log('New tab created:', tab);
});
```

### 3.2 查询当前标签页：chrome.tabs.query()

chrome.tabs.query(queryInfo, callback) 方法用于查询当前标签页。

参数：

- queryInfo：一个对象，包含查询条件。
  - active：是否查询活动标签页。
  - currentWindow：是否查询当前窗口的标签页。
  - 其他属性：根据标签页的属性进行查询，如 url、title 等。
  - 可以使用多个属性进行组合查询。
  - 可以使用通配符 \* 进行模糊匹配。
- callback(tabs)：一个回调函数，在查询完成后执行。
  - 一个数组，包含符合条件的标签页信息。
  - 如果查询失败，返回错误信息。

示例：

```
// 查询所有活动标签页
chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  console.log('Active tab:', tabs[0]);
});

// 查询所有标签页
chrome.tabs.query({}, function(tabs) {
  console.log('All tabs:', tabs);
});
```

### 3.3 更新标签页：chrome.tabs.update()

chrome.tabs.update(tabId, updateProperties, callback) 方法用于更新指定标签页的属性。

参数：

- tabId(Number)：要更新的标签页的 ID。
- updateProperties(Options)：一个对象，包含要更新的属性。
- callback(Options)：一个回调函数，在更新完成后执行。
  - 一个对象，包含更新后的标签页信息。
  - 如果更新失败，返回错误信息。

示例：

```
// 更新标签页的 URL

chrome.tabs.update(tabId, { url: 'URL_ADDRESS' }, function(tab) {
  console.log('Tab updated:', tab);
});
```

### 3.4 关闭标签页：chrome.tabs.remove()

chrome.tabs.remove(tabId, callback) 方法用于关闭指定标签页。

参数：

- tabId(Number)：要关闭的标签页的 ID。
- callback()：一个回调函数，在关闭完成后执行。
  - 如果关闭失败，返回错误信息。

示例：

```
// 关闭标签页

chrome.tabs.remove(tabId, function() {
  console.log('Tab closed');
});
```

### 3.5 监听标签页变化：chrome.tabs.onUpdated

chrome.tabs.onUpdated.addListener(callback) 方法用于监听标签页的变化。

参数：

- callback(tabId, changeInfo, tab)：一个回调函数，在标签页变化时执行。
  - tabId(Number)：发生变化的标签页的 ID。
  - changeInfo(Options)：一个对象，包含标签页变化的信息。
  - tab(Options)：一个对象，包含发生变化的标签页的信息。
  - 如果监听失败，返回错误信息。

示例：

```
// 监听标签页变化

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  console.log('Tab updated:', tabId, changeInfo, tab);
});

```

### 3.6 监听标签页激活：chrome.tabs.onActivated

chrome.tabs.onActivated.addListener(callback) 方法用于监听标签页的激活。

参数：

- callback(activeInfo)：一个回调函数，在标签页激活时执行。
  - activeInfo(Options)：一个对象，包含激活的标签页的信息。
  - 如果监听失败，返回错误信息。

示例：

```
// 监听标签页激活

chrome.tabs.onActivated.addListener(function(activeInfo) {
  console.log('Tab activated:', activeInfo);
});
```

### 3.7 监听标签页关闭：chrome.tabs.onRemoved

chrome.tabs.onRemoved.addListener(callback) 方法用于监听标签页的关闭。

参数：

- callback(tabId, removeInfo)：一个回调函数，在标签页关闭时执行。
  - tabId(Number)：关闭的标签页的 ID。
  - removeInfo(Options)：一个对象，包含关闭的标签页的信息。
  - 如果监听失败，返回错误信息。

示例：

```
// 监听标签页关闭

chrome.tabs.onRemoved.addListener(function(tabId, removeInfo) {
  console.log('Tab removed:', tabId, removeInfo);
});
```

## 4. chrome.runtime

chrome.runtime 是 Chrome 扩展 API 中的一个模块，用于与扩展的运行时环境进行交互。它提供了一些方法和事件，用于获取扩展的信息、发送消息给扩展、监听扩展的事件等。

### 4.1 获取扩展信息：chrome.runtime.getManifest()

chrome.runtime.getManifest() 方法用于获取扩展的清单文件（manifest.json）中的信息。

返回值：

- 一个对象，包含扩展的信息。
- 如果获取失败，返回错误信息。

示例：

```
// 获取扩展信息

const manifest = chrome.runtime.getManifest();

console.log('Extension name:', manifest.name);
console.log('Extension version:', manifest.version);
```

### 4.2 发送消息给扩展：chrome.runtime.sendMessage()

chrome.runtime.sendMessage(extensionId, message, options, callback) 方法用于向扩展发送消息。

参数：

- extensionId(String)：可选参数，指定要发送消息的扩展的 ID。如果不指定，则默认为当前扩展。
- message(any)：要发送的消息。消息可以是任何类型的数据，具体取决于接收方的需求。
- options(Object)：可选参数，用于配置消息的发送选项。
  - includeTlsChannelId (Boolean): 如果设置为 true，则会在消息中包含 TLS 通道 ID。这通常用于需要跨多个标签页或窗口进行安全通信的场景。
  - targetOrigin (String): 指定消息的目标源。这可以是一个具体的源（如 https://example.com），也可以是一个通配符（如 \*），表示消息可以发送到任何源。
  - targetTabId (Number): 指定消息的目标标签页 ID。如果设置了这个选项，消息将只发送到指定的标签页。
  - targetFrameId (Number): 指定消息的目标框架 ID。如果标签页包含多个框架，这个选项可以指定消息发送到哪个框架。
  - timeout (Number): 指定消息发送的超时时间（毫秒）。如果在指定时间内没有收到响应，发送操作将被取消。
- callback(response)：可选参数，用于接收消息的响应。
  - 返回值：
  - 一个 Promise 对象，用于接收消息的响应。如果发送消息时指定了 callback 参数，则返回的 Promise 对象将被解析为响应数据。如果发送消息时未指定 callback 参数，则返回的 Promise 对象将被解析为 undefined。

示例：

```
// 发送消息给扩展

chrome.runtime.sendMessage({ message: 'Hello from the popup!' }, function(response) {
  console.log('Response from background script:', response);
});

// 发送消息给扩展，并指定回调函数

chrome.runtime.sendMessage({ message: 'Hello from the popup!' }, function(response) {
  console.log('Response from background script:', response);
});

// 发送消息给扩展，并指定超时时间

chrome.runtime.sendMessage({ message: 'Hello from the popup!' }, function(response) {
  console.log('Response from background script:', response);
}, { timeout: 5000 });

// 发送消息给扩展，并指定目标标签页 ID

chrome.runtime.sendMessage({ message: 'Hello from the popup!' }, function(response) {
  console.log('Response from background script:', response);
}, { targetTabId: tabId });

// 发送消息给扩展，并指定目标框架 ID

chrome.runtime.sendMessage({ message: 'Hello from the popup!' }, function(response) {
  console.log('Response from background script:', response);
}, { targetFrameId: frameId });
```

在这个示例中，我们向扩展发送了一条消息，并在发送消息时指定了一个回调函数。当扩展接收到消息并处理完成后，回调函数将被调用，并接收到响应数据。

### 4.3 监听扩展事件：chrome.runtime.onMessage

chrome.runtime.onMessage.addListener(callback) 方法用于监听扩展的消息事件。当其他部分（如内容脚本、后台脚本或其他扩展）向当前扩展发送消息时，此方法会触发。

参数：

- callback(request, sender, sendResponse)：一个回调函数，在接收到扩展的消息时执行。
  - request(any)：接收到的消息。消息可以是任何类型的数据，具体取决于发送方。
  - sender(MessageSender)：发送消息的标签页或扩展的信息。MessageSender 对象包含以下属性：
    - tab(Options)：发送消息的标签页的信息。
    - id(Number)：发送消息的标签页或扩展的 ID。
    - url(String)：发送消息的标签页的 URL。
  - sendResponse(response)：一个函数，用于发送响应给发送消息的标签页或扩展。响应可以是任何类型的数据，具体取决于接收方的需求。
  - 返回值：
  - 一个布尔值，表示是否异步响应。如果返回 true，则表示 sendResponse 函数将异步调用，即在 callback 函数返回后调用。如果返回 false 或未返回任何值，则表示 sendResponse 将同步调用，即在 callback 函数返回前调用。

示例：

```
// 监听扩展事件

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  console.log('Message received:', request);
  console.log('Sender:', sender);


  // 处理消息
  if (request.message === 'hello') {
    sendResponse({ response: 'Hello from the background script!' });
  } else {
    sendResponse({ response: 'Unknown message' });
  }

  // 异步响应
  return true;

  -- 第二种写法 --

  // 异步响应
  setTimeout(function() {
    sendResponse({ response: 'Hello, sender!' });
  }, 1000);

  // 同步响应
  return { response: 'Hello, sender!' };
});
```

在这个示例中，我们监听了 chrome.runtime.onMessage 事件，并在接收到消息时打印了消息内容和发送者信息。然后，我们根据消息内容发送了相应的响应。返回 true 表示我们将异步处理响应。

### 4.4 监听扩展安装：chrome.runtime.onInstalled

chrome.runtime.onInstalled.addListener(callback) 方法用于监听扩展的安装事件。当扩展被安装或更新时，此方法会触发。

参数：

- callback(details)：一个回调函数，在扩展安装或更新时执行。
  - details(Object)：一个对象，包含安装或更新的详细信息。
  - reason(String)：安装或更新的原因。可能的值有：
    - install：扩展被安装。
    - update：扩展被更新。
    - chrome_update：Chrome 浏览器被更新。

示例：

```
// 监听扩展安装事件

chrome.runtime.onInstalled.addListener(function(details) {
  console.log('Extension installed:', details);

  // 执行安装或更新后的操作
  if (details.reason === 'install') {
    // 扩展被安装时执行的操作
  } else if (details.reason === 'update') {
    // 扩展被更新时执行的操作
  }
});

```

### 4.5 监听扩展更新：chrome.runtime.onUpdateAvailable

chrome.runtime.onUpdateAvailable.addListener(callback) 方法用于监听扩展的更新事件。当扩展有可用的更新时，此方法会触发。

参数：

- callback(details)：一个回调函数，在扩展有可用的更新时执行。
  - details(Object)：一个对象，包含更新的详细信息。
  - previousVersion(String)：扩展的上一个版本号。
  - appId(String)：扩展的应用 ID。

示例：

```
// 监听扩展更新事件

chrome.runtime.onUpdateAvailable.addListener(function(details) {
  console.log('Extension update available:', details);

  // 执行更新后的操作
  // 可以使用 chrome.runtime.reload() 方法重新加载扩展
  chrome.runtime.reload();
});

```

### 4.6 监听扩展卸载：chrome.runtime.onUninstalled

chrome.runtime.onUninstalled.addListener(callback) 方法用于监听扩展的卸载事件。当扩展被卸载时，此方法会触发。

参数：

- callback(details)：一个回调函数，在扩展被卸载时执行。
  - details(Object)：一个对象，包含卸载的详细信息。
  - reason(String)：卸载的原因。可能的值有：
    - uninstalled：扩展被手动卸载。
    - spoofer：扩展被恶意软件或恶意软件的插件卸载。
    - update：扩展被更新时卸载。

示例：

```
// 监听扩展卸载事件

chrome.runtime.onUninstalled.addListener(function(details) {
  console.log('Extension uninstalled:', details);

  // 执行卸载后的操作
  // 可以执行清理操作，如删除扩展的数据或执行其他清理任务
});
```

### 4.7 监听扩展启动：chrome.runtime.onStartup

chrome.runtime.onStartup.addListener(callback) 方法用于监听扩展的启动事件。当扩展启动时，此方法会触发。

参数：

- callback()：一个回调函数，在扩展启动时执行。

示例：

```
// 监听扩展启动事件

chrome.runtime.onStartup.addListener(function() {
  console.log('Extension started');

  // 执行启动后的操作
  // 可以执行初始化操作，如加载数据或执行其他启动任务
});

```

### 4.8 监听扩展激活：chrome.runtime.onActivated

chrome.runtime.onActivated.addListener(callback) 方法用于监听扩展的激活事件。当扩展被激活时，此方法会触发。

参数：

- callback(activeInfo)：一个回调函数，在扩展激活时执行。
  - activeInfo(Options)：一个对象，包含激活的扩展的信息。
  - 如果监听失败，返回错误信息。

示例：

```
// 监听扩展激活事件

chrome.runtime.onActivated.addListener(function(activeInfo) {
  console.log('Extension activated:', activeInfo);

  // 执行激活后的操作
  // 可以执行初始化操作，如加载数据或执行其他激活任务
});
```

## 5. chrome.window

chrome.window 是 Chrome 扩展 API 中的一个模块，用于操作浏览器窗口。

### 5.1 打开新窗口：chrome.windows.create()

chrome.windows.create(options, callback) 方法用于打开一个新的浏览器窗口。

参数：

- options(Options)：一个对象，包含窗口的创建选项。
  - url(String)：要打开的 URL。
  - focused(Boolean)：是否将新窗口设置为焦点窗口。
  - type(String)：窗口的类型。可能的值有：
    - normal：普通窗口。
    - popup：弹出窗口。
    - panel：面板窗口。
- callback(window)：一个回调函数，在窗口创建完成后执行。
  - 返回值：
  - 一个对象，包含新窗口的信息。
  - 如果创建失败，返回错误信息。

示例：

```
// 打开新窗口

chrome.windows.create({ url: 'URL_ADDRESS' }, function(window) {
  console.log('New window created:', window);
});
```

### 5.2 关闭窗口：chrome.windows.remove()

chrome.windows.remove(windowId, callback) 方法用于关闭指定窗口。

参数：

- windowId(Number)：要关闭的窗口的 ID。
- callback()：一个回调函数，在窗口关闭完成后执行。
- 如果关闭失败，返回错误信息。

示例：

```
// 关闭窗口

chrome.windows.remove(windowId, function() {
  console.log('Window removed');
});
```

### 5.3 获取窗口信息：chrome.windows.get()

chrome.windows.get(windowId, callback) 方法用于获取指定窗口的信息。

参数：

- windowId(Number)：要获取信息的窗口的 ID。
- callback(window)：一个回调函数，在获取窗口信息完成后执行。
  - 返回值：
  - 一个对象，包含窗口的信息。

示例：

```
// 获取窗口信息

chrome.windows.get(windowId, function(window) {
  console.log('Window information:', window);
});

```

### 5.4 更新窗口的属性:chrome.windows.update()

chrome.windows.update(windowId, updateInfo, callback) 方法用于更新窗口的属性。仅指定要更改的属性；未指定的属性会保持不变。

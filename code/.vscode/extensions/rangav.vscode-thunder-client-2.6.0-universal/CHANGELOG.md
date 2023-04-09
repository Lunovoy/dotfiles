# Release Notes

#### [Thunder Client Release Notes](https://github.com/rangav/thunder-client-support/releases)

# v2.6.0 - (2023-04-03)

## New Features

- CLI - Adding proxy support [#1089](https://github.com/rangav/thunder-client-support/issues/1089)
- Ability to run Pre Filters before Pre Requests [#1018](https://github.com/rangav/thunder-client-support/issues/1018)
- Option in the pre-requests to `clear the cookies` before execution [#1091](https://github.com/rangav/thunder-client-support/issues/1091)
- Expose responses from auth request failures [#1085](https://github.com/rangav/thunder-client-support/issues/1085), [#1074](https://github.com/rangav/thunder-client-support/issues/1074)
- Add possibility to configure `"Origin"` header for OAuth2 token generator [#1084](https://github.com/rangav/thunder-client-support/issues/1084)

## Bug Fixes

- Test json[0].someProperty equals undefined [#1077](https://github.com/rangav/thunder-client-support/issues/1077)
- Tests not working (failing) if response in not displayable (bigger than 2MB) [#1065](https://github.com/rangav/thunder-client-support/issues/1065)
- Stop on fail for pre-requests [#1095](https://github.com/rangav/thunder-client-support/issues/1095)

### Clear Cookie in Pre Run

<img width="755" alt="Screenshot 2023-04-03 at 18 45 08" src="https://user-images.githubusercontent.com/8637550/229587061-4884b38d-5d36-4101-820f-682daf2d4dc3.png">

### Clear Cookies in Custom Script

```js
async function testFilter() {
  await tc.clearCookies();
}
```

### Origin Header in OAuth2

<img width="755" alt="Screenshot 2023-04-03 at 18 48 16" src="https://user-images.githubusercontent.com/8637550/229587603-27176e17-2121-412f-89c7-e40657bc2994.png">

### Proxy support in CLI

You need to set in `workspace -> .vscode -> settings.json` for cli to use proxy.

<img width="249" alt="Screenshot 2023-03-30 at 09 59 32" src="https://user-images.githubusercontent.com/8637550/228785551-9cd68c7f-fd04-4ccb-8520-66ae927e1b10.png">

<img width="520" alt="Screenshot 2023-03-30 at 09 59 48" src="https://user-images.githubusercontent.com/8637550/228785612-926f7682-1a57-42a3-bc05-c62d61ae25f6.png">

# v2.5.3 - (2023-03-23)

## New Features

- Resolve/Render nested .env variables (when linking to .env) [#916](https://github.com/rangav/thunder-client-support/issues/916)

## Bug Fixes

- Is there a reason Thunder Client is onStartupFinished activated? [#928](https://github.com/rangav/thunder-client-support/issues/928)
- The Dark High Contrast Theme cannot distinguish check box activation well. [#1054](https://github.com/rangav/thunder-client-support/issues/1054)
- import cURL Text Failed [#1055](https://github.com/rangav/thunder-client-support/issues/1055), [#1056](https://github.com/rangav/thunder-client-support/issues/1056)
- xml-query test feature [#1063](https://github.com/rangav/thunder-client-support/issues/1063)

# v2.5.1 - (2023-03-09)

## New Features

- Import Local or Global Env after exporting [#1044](https://github.com/rangav/thunder-client-support/issues/1044)

## Bug Fixes

- Fix - Refactor broken body [#1034](https://github.com/rangav/thunder-client-support/issues/1034)
- Test fails with exit code 0 [#1041](https://github.com/rangav/thunder-client-support/issues/1041)
- Thunder doesn't recognize script file exports [#1045](https://github.com/rangav/thunder-client-support/issues/1045)

# v2.5.0 - (2023-02-27)

## New Features

- Run all collections [#701](https://github.com/rangav/thunder-client-support/issues/701)
- Filter input for Environment variables [#1022](https://github.com/rangav/thunder-client-support/issues/1022)
- Ability to Format Graphql Body [#931](https://github.com/rangav/thunder-client-support/issues/931)
- Tests: override schema validation [#1020](https://github.com/rangav/thunder-client-support/issues/1020)

## Bug Fixes

- Keyboard shortcuts not working - Ctrl+P, Ctrl+Shift+P [#986](https://github.com/rangav/thunder-client-support/issues/986)
- Disable built-in Thunder Client keyboard shortcuts [#991](https://github.com/rangav/thunder-client-support/issues/991)

## CLI

- Run **All** Collections using `tc --col all`
- Run **Multiple** Collections `tc --col colIdOrName,colIdOrName`
- Update CLI to version **v1.1.0**

# v2.4.3 - (2023-02-21)

## New Features

- Add documentation to folders [#1003](https://github.com/rangav/thunder-client-support/issues/1003)
- Ability to set default tab - Activity/Collection/Env tabs [#344](https://github.com/rangav/thunder-client-support/issues/344)
- Support for Env variable types/secret variables [#824](https://github.com/rangav/thunder-client-support/issues/824)

## CLI

- CLI - Run selected requests in collection [#764](https://github.com/rangav/thunder-client-support/issues/764)
- Update to latest version: `npm i -g @thunderclient/cli`

### New Setting

<img width="589" alt="Screenshot 2023-02-21 at 15 21 30" src="https://user-images.githubusercontent.com/8637550/220385874-2b49f773-4cf3-406c-83c4-222ecf62452c.png">

# v2.4.2 - (2023-02-17)

## New Features

- Stop collection on fail [#768](https://github.com/rangav/thunder-client-support/issues/768)
- CLI - Run collection or request using `--env 'nameOrId'` [#764](https://github.com/rangav/thunder-client-support/issues/764)

### Stop Collection on Fail

- Stop collection runner when a request is failed using the checkbox.
- You can also use switch `--stop-on-fail` when running in `CLI` to make build fail

<img width="800" alt="Screenshot 2023-02-17 at 16 36 00" src="https://user-images.githubusercontent.com/8637550/219711544-ddcf9bc3-4cce-4394-b6df-12ae4eccbb4c.png">

# v2.4.0 - (2023-02-08)

## Introduction Thunder Client CLI

In 2021 we launched [Thunder Client extension](https://medium.com/@rangav/thunder-client-alternative-to-postman-68ee0c9486d6) for VSCode which was game changer, as we were the first to launch a GUI based API Client inside VSCode. Today we are launching Thunder Client CLI which will have many new innovative features for API Testing.

### Key Features

- Simple & Easy to Use CLI tool
- Seamless Integration with Thunder Client Extension
- Run Requests/Collections and View Test results
- Syntax Highlighting and VSCode Themes
- Open Request/Collection UI from the terminal
- Enhances CURL commands
- CI/CD Integration (Beta)

### Installation

- Please update [extension](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) to latest version
- Install CLI  - `npm i -g @thunderclient/cli`

### Run Requests

The CLI and Extension are integrated seamlessly, so you can access requests data from terminal without any additional configuration.

- To execute requests run `tc 'requestNameOrId'`, the request can be executed using id, name or partial name

<img width="800" alt="run-req-v3-rn" src="https://user-images.githubusercontent.com/8637550/217370163-18f2efef-7615-43e5-bdc0-62b5b8350326.png">

### VSCode Themes In Terminal

- We are bringing VSCode themes to the terminal for the first time.

<img width="800" alt="theme-beared-arc_Rose-Pine copy" src="https://user-images.githubusercontent.com/8637550/217362161-ea8f5b98-0246-4240-bc76-4261b06b6885.png">

### Run Collection

Collection Runner will execute all the requests in collection and display output in a beautiful format similar to extension UI.

- `tc --col 'colNameOrId'` will run requests in **collection** from CLI
- `tc --fol 'colNameOrId'` will run requests in **folder** from CLI

<img width="800" alt="run-col-v2-rn" src="https://user-images.githubusercontent.com/8637550/217370660-0033a6ca-ee15-4148-930a-517a8b8ab7a2.png">

### Enhances Curl Commands

In the above we have seen how to run requests and collections easily from CLI. Thunder Client CLI also has integration with CURL commands, so you can use it to create requests from CLI.

Run Curl command by prefixing `tc` and see the magic. By using Thunder Client CLI you will get following benefits over normal curl.

- Formatted Output
- Syntax Highlighting & VSCode Themes
- Request will be saved to your Activity Tab

<img width="800" alt="tc-curl-req" src="https://user-images.githubusercontent.com/8637550/217367630-d6721411-45cf-4d74-92e7-245965d5488b.png">

### Full Documentation

- Please read the blog post for complete documentation about CLI.
- https://medium.com/p/d91eb5c71d8e

### Product Hunt

- We are launching on [Product Hunt](https://www.producthunt.com/posts/thunder-client-cli)

## Bug Fixes

- Log Redirect details to output for the request [#788](https://github.com/rangav/thunder-client-support/issues/788)
- "Invalid URL" error on postman JSON conversion on Windows [#987](https://github.com/rangav/thunder-client-support/issues/987)
- Invalid URL Error due to baseurl generation with ENV variables. [#999](https://github.com/rangav/thunder-client-support/issues/999)
- Filters: exporting multiline issue [#1000](https://github.com/rangav/thunder-client-support/issues/1000)

# v2.3.3 - (2023-01-20)

## Bug Fixes

- Import functionality is skipping the preReq information [#974](https://github.com/rangav/thunder-client-support/issues/974)
- Dates in release notes are wrong [#980](https://github.com/rangav/thunder-client-support/issues/980)

# v2.3.2 - (2023-01-18)

## Bug Fixes

- URL parsing issue when converting to Postman [#976](https://github.com/rangav/thunder-client-support/issues/976)
- Collection Auth Settings are not properly converted for postman collection [#978](https://github.com/rangav/thunder-client-support/issues/978)

# v2.3.1 - (2023-01-17)

## Bug Fixes

- Import functionality is skipping the preReq information [#974](https://github.com/rangav/thunder-client-support/issues/974)
- Variables not uploading in pre run, request body fail [#975](https://github.com/rangav/thunder-client-support/issues/975)
- Axios - Always return error response [#969](https://github.com/rangav/thunder-client-support/issues/969)

# v2.3.0 - (2023-01-05)

## Happy New Year

- Wish everyone a `Happy New Year 2023` 🎉

## New Features

- Add `readFile filter` to use in request / scripts [#949](https://github.com/rangav/thunder-client-support/issues/949), [#296](https://github.com/rangav/thunder-client-support/issues/296)
- `exec` function added to `tc object` to execute node commands in scripts [#942](https://github.com/rangav/thunder-client-support/issues/942)
- Set `headers` from `pre filter` script [#953](https://github.com/rangav/thunder-client-support/issues/953)
- Enable `setTimeout` in Scripts [#957](https://github.com/rangav/thunder-client-support/issues/957)
- Setting option to disable AutoRun after Curl Import [#960](https://github.com/rangav/thunder-client-support/issues/960)
- When filter fails, return error message value [#955](https://github.com/rangav/thunder-client-support/issues/955), [#942](https://github.com/rangav/thunder-client-support/issues/942)
- OAuth Request: Log Response when generating tokens [#956](https://github.com/rangav/thunder-client-support/issues/956)
- Consider on-boarding to vscode sponsor [#958](https://github.com/rangav/thunder-client-support/issues/958)
- Escape | symbol in exec filter [#942](https://github.com/rangav/thunder-client-support/issues/942)

## Bug Fixes

- Remove scope from url when empty for OAuth requests [#724](https://github.com/rangav/thunder-client-support/issues/724)
- Fix - tiny typo on the changelog [#950](https://github.com/rangav/thunder-client-support/issues/950)

### readFile filter

- Create a `variable` with file path `absolute` or `relative path` to current workspace

<img width="800" alt="Screenshot 2023-01-05 at 17 26 20" src="https://user-images.githubusercontent.com/8637550/210842827-04fb0e78-256f-4f18-b603-10d2ca8afe8d.png">

- use the variable and `readFile` filter

<img width="800" alt="Screenshot 2023-01-05 at 17 24 00" src="https://user-images.githubusercontent.com/8637550/210843011-d1cc80ee-f632-4089-ad21-b8babe7de086.png">

### New Functions in Scripts

- You can read file in scripts using `await tc.readFile("path");`
- Execute a command in custom scripts using `await tc.exec("command");`

<img width="661" alt="Screenshot 2023-01-05 at 17 34 29" src="https://user-images.githubusercontent.com/8637550/210844298-29fa018e-d7f0-46ae-a816-7db5a75e8ccf.png">

# v2.2.4 - (2022-12-26)

## Bug Fixes

- Fix - Request name with '<' rendered as &lt; [#939](https://github.com/rangav/thunder-client-support/issues/939)
- `onStartupFinished` activation event added back to package.json to fix [#945](https://github.com/rangav/thunder-client-support/issues/945), [#946](https://github.com/rangav/thunder-client-support/issues/946)

# v2.2.1 - (2022-12-22)

## New Features

- Ability to load the built-in `http` or `axios` module [#932](https://github.com/rangav/thunder-client-support/issues/932), [#909](https://github.com/rangav/thunder-client-support/issues/909)
  - More `node` modules enabled in [Scripts](https://github.com/rangav/thunder-client-support/blob/master/docs/custom-filters.js) `axios, tough-cookie, ajv, ajv-formats, http, https, assert, buffer, stream`
- Show menu option to see `Logs` & in Docs [#922](https://github.com/rangav/thunder-client-support/issues/922)
- Show Request Cookies in Logs [#923](https://github.com/rangav/thunder-client-support/issues/923)
- Clear all activity without prompt option [#929](https://github.com/rangav/thunder-client-support/issues/929)

## Bug Fixes

- wkhtmtopdf PDF with table not treated like other PDFs [#935](https://github.com/rangav/thunder-client-support/issues/935)
- Remove onStartupFinished from activation events [#928](https://github.com/rangav/thunder-client-support/issues/928)
- Query parameters disappear when changing url [#933](https://github.com/rangav/thunder-client-support/issues/933)
- Workspace Relative folder not created if doesn't exist [#934](https://github.com/rangav/thunder-client-support/issues/934)

### Show Logs

- Show Logs `shortcut` added to menu list items

<img width="447" alt="Thunder Logs" src="https://user-images.githubusercontent.com/8637550/209186501-a4b3419a-cfab-4c98-adfc-093aa5d73451.png">

# v2.2.0 - (2022-12-14)

## News

- The extension crossed `1.5M downloads` in [vscode marketplace](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) 🎉 🚀🚀

<img width="750" alt="Screenshot 2022-12-15 at 13 12 38" src="https://user-images.githubusercontent.com/8637550/207868308-d7ffe068-2db6-4aac-bdd6-63d24be3ddc7.png">

## New Features

- Replaced `xml2js` with `fast-xml-parser` library for xml to json conversion
- Internal code refactor to make it ready for `cli` feature

## Bug Fixes

- When pasting a url with `__action` the query parameters behaves incorrectly [#914](https://github.com/rangav/thunder-client-support/issues/914)

# v2.1.1 - (2022-12-06)

## New Features

- VSCode setting to disable auto send content-type header [#908](https://github.com/rangav/thunder-client-support/issues/908)
- Load node module in Custom Filter issues partially fixed

# v2.1.0 - (2022-12-05)

## New Features

- Run `Custom Filter` directly in `Pre-Run` tab [#902](https://github.com/rangav/thunder-client-support/issues/902)
- Import `any Node modules` in [Custom Filters](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#custom-filters) - [#903](https://github.com/rangav/thunder-client-support/issues/903), [#898](https://github.com/rangav/thunder-client-support/issues/898)
- New Setting to set the `default url` of a new request [#702](https://github.com/rangav/thunder-client-support/issues/702)
- Allow `json with comment` in request body [#584](https://github.com/rangav/thunder-client-support/issues/584)
- New vscode settings deleteWithoutPrompt [#901](https://github.com/rangav/thunder-client-support/issues/901)
- Lack of feedback around undefined custom filters [#899](https://github.com/rangav/thunder-client-support/issues/899)
- Add more filters [`urlEncode`](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#urlEncode) & [`urlDecode`](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#urlDecode)

## Bug Fixes

- Logging null from scripts should prefix 'Script Log:' [#900](https://github.com/rangav/thunder-client-support/issues/900)
- Open API import doesn't show path parameters with query params [#907](https://github.com/rangav/thunder-client-support/issues/907)

### Run Custom Filter Directly

- Run Custom Filter directly in `Pre-Run` tab, useful to set Env Variables

<img width="781" alt="Screenshot 2022-12-04 at 16 56 16" src="https://user-images.githubusercontent.com/8637550/205504506-c7cd58b8-f489-4560-a860-9916d0c14456.png">

<br>

- This Custom Filter will not have any `arguments` and return `no value`

<img width="543" alt="Screenshot 2022-12-04 at 17 31 23" src="https://user-images.githubusercontent.com/8637550/205506079-395de0b6-593e-4fa9-b38a-31a1d6a1545a.png">

### Import Node Module (Beta)

- Now you can import any `node module` in [Custom Filters](https://github.com/rangav/thunder-client-support/blob/master/docs/custom-filters.js)
- e.g: `var moment = await tc.loadModule("moment");`

<img width="762" alt="Screenshot 2022-12-04 at 17 33 03" src="https://user-images.githubusercontent.com/8637550/205506205-f01dd73d-d8b1-41eb-9f65-a0c88170d00f.png">

#### New VSCode Setting

<img width="617" alt="Screenshot 2022-12-04 at 16 15 13" src="https://user-images.githubusercontent.com/8637550/205502323-492e50fc-efd8-4e84-a859-3bd815865245.png">

# v2.0.2 - (2022-11-25)

## New Features

- New Array filters operations are supported [`*, =, !=, <=, <, >=, >, *=, ^=, $=`](https://github.com/rangav/thunder-client-support#test-arrays)
- New Function filter [`prop`](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#prop) added

### Array Filters

<img width="1340" alt="ArrayTests-4" src="https://user-images.githubusercontent.com/8637550/204022853-a5bfa4c5-e7be-4cd8-993f-1d3832cad574.png">

# v2.0.1 - (2022-11-24)

## New Features

- Enable `Set Env Variables` from Custom Scripts [#891](https://github.com/rangav/thunder-client-support/issues/891)
- Add [`format filter`](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#format) for string format [#250](https://github.com/rangav/thunder-client-support/issues/250)
- New Filters added [`at, filter, isEmail, isUrl`](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md) [#481](https://github.com/rangav/thunder-client-support/issues/481)
- [`setIfValue`](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md#setIfValue) filter added, to set env only when result has a value [#109](https://github.com/rangav/thunder-client-support/issues/109)
- Array filter using `json.items[*].id` format [#846](https://github.com/rangav/thunder-client-support/issues/846)
- Tests queries should parse environment variables [#533](https://github.com/rangav/thunder-client-support/issues/533)
- Export postman format lacks description field [#884](https://github.com/rangav/thunder-client-support/issues/884)
- Add Accept header to OAuth token request [#892](https://github.com/rangav/thunder-client-support/issues/892)
- Allow to hide `last modified section` in sidebar [#577](https://github.com/rangav/thunder-client-support/issues/577)

## Bug Fixes

- Syntax highlighting did not work for `custom filters` in body

#### New VSCode Settings

<img width="526" alt="Screenshot 2022-11-24 at 11 37 00" src="https://user-images.githubusercontent.com/8637550/203775308-60db51a6-8b22-4705-a405-779428d2c41d.png">

# v2.0.0 - (2022-11-17)

We are excited to release `v2.0` which brings advanced functionality like `Function filters` and `Custom scripting`.

## New Features

- `Custom Scripting` & function `filters` [#710](https://github.com/rangav/thunder-client-support/issues/710), [#750](https://github.com/rangav/thunder-client-support/issues/750), [#846](https://github.com/rangav/thunder-client-support/issues/846), [#850](https://github.com/rangav/thunder-client-support/issues/850), [#278](https://github.com/rangav/thunder-client-support/issues/278), [#605](https://github.com/rangav/thunder-client-support/issues/605)
- `Auto Reload` Sidebar on db files changes [#858](https://github.com/rangav/thunder-client-support/issues/858)
- Option to add CUSTOM http request `methods` [#866](https://github.com/rangav/thunder-client-support/issues/866)
- Improve Xml Testing workflow [#850](https://github.com/rangav/thunder-client-support/issues/850)
- Filter Array in Tests and perform Count operation [#874](https://github.com/rangav/thunder-client-support/issues/874)

## Bug Fixes

- File Form Checkbox disappear (UI) [#875](https://github.com/rangav/thunder-client-support/issues/875)
- Bug fix - files folder not created [#880](https://github.com/rangav/thunder-client-support/issues/880)

### Function Filters

- Function filters are useful to perform advanced data manipulation and the syntax is inspired from [Jinja Filters](https://jinja.palletsprojects.com/en/3.1.x/templates/#builtin-filters)
- The filters can be used in environment `variables` and `Tests`
- The filter syntax is `{{variable | filter1 | filter2}}`
- Full Documentation [click here](https://github.com/rangav/thunder-client-support/blob/master/docs/filters.md)

### Built-In Filters:

<table style="width:100%">
<tr>
<td>abs</td> <td>add</td> <td >atob</td> <td >btoa</td>   <td>exec</td>  <td >first</td> 
</tr>
<tr>
   <td >hash</td> <td >hmac</td>  <td>join</td> <td >last</td> <td >length</td> <td >lower</td> 
</tr>
<tr>
     <td>map</td> <td >multiply</td> <td >removeQuotes</td> <td >replace</td>  <td>slice</td> <td >split</td> 
</tr>
<tr>
   <td >stringify</td>    <td >substring</td>      <td>subtract</td> <td >upper</td> <td ></td> <td ></td> 
</tr>
</table>

#### Filters In Env Variable

- This is similar to `pre-request` scripting

<img width="900" alt="Screenshot 2022-11-17 at 09 45 15" src="https://user-images.githubusercontent.com/8637550/202413000-abe18411-13a1-47c0-a612-f3bc585b5bb0.png">

#### Filters In Tests

- This is similar to `post-request` scripting

<img width="900" alt="Screenshot 2022-11-17 at 09 56 57" src="https://user-images.githubusercontent.com/8637550/202415862-5e6d3712-a7c8-466b-8c7c-f91452ee4464.png">

### Custom Filters

- Create Javascript file with custom filters

## <img width="701" alt="custom-filter" src="https://user-images.githubusercontent.com/8637550/202422492-30ad7123-0964-40db-ba1c-31bbe67d57f4.png">

<br>

- Attach Custom filters JS files to `Collection Settings`

<img width="900" alt="col-sets" src="https://user-images.githubusercontent.com/8637550/202426659-972f5307-0b51-4100-b6bf-0f3fb2f33140.png">

<br>

- Use Custom filters in Request

<img width="900" alt="custom-filter-using" src="https://user-images.githubusercontent.com/8637550/202422840-76998a57-0cbf-46ef-9309-52965c72959c.png">

---

<details>
  <summary>Show Previous Releases</summary>
  
# v1.20.1 - (2022-10-19)

## New Features

- Extend `{{#date}}` & `{{#dateISO}}` system variable capabilities [#656](https://github.com/rangav/thunder-client-support/issues/656)
- Add `Drag & Drop` sorting for `Forms & Headers` rows [#835](https://github.com/rangav/thunder-client-support/issues/835)
- New System Variable `{{#name}}` added [#844](https://github.com/rangav/thunder-client-support/issues/844)

## Bug Fixes

- Run Main Request when pre-requests has issue [#837](https://github.com/rangav/thunder-client-support/issues/837)
- Environment Variables with integer names are passed as the variable name [#833](https://github.com/rangav/thunder-client-support/issues/833)
- Set empty variable value when cookie value is empty [#841](https://github.com/rangav/thunder-client-support/issues/841)
- Fix - OAuth 2 token not being added to the request [#847](https://github.com/rangav/thunder-client-support/issues/847)

### Date Manipulation

- Manipulate System variables `{{#date}}` & `{{#dateISO}}` using format `{year:2, mon:-3, day:-2, hour:3, min:5, sec:7}`
- System variables documentation [here](https://github.com/rangav/thunder-client-support#variables)

<img width="850" alt="Screenshot 2022-10-19 at 08 12 16" src="https://user-images.githubusercontent.com/8637550/196622592-9788b19f-5b27-46b9-a4ae-78499ee405b0.png">

# v1.20.0 - (2022-10-12)

## New Features

- Ability to `chain requests` [#249](https://github.com/rangav/thunder-client-support/issues/249), [#16](https://github.com/rangav/thunder-client-support/issues/16)
- Query `params` sort using `drag and drop` [#677](https://github.com/rangav/thunder-client-support/issues/677)

## Bug Fixes

- Link to .env not working with Remote SSH [#821](https://github.com/rangav/thunder-client-support/issues/821), [#648](https://github.com/rangav/thunder-client-support/issues/648)
- File upload not working in WSL [#453](https://github.com/rangav/thunder-client-support/issues/453)

### Request Chaining

- You can `chain requests` at request, folder & collection level
- Run `multiple` pre requests in sequence
- Run pre-request based on `condition`

<img width="785" alt="Screenshot 2022-10-12 at 05 16 18" src="https://user-images.githubusercontent.com/8637550/195323876-b41efb4f-e55e-4b39-86cd-c67f70b40c76.png">

# v1.19.4 - (2022-10-03)

## New Features

- Automatically `Refresh access token` [#216](https://github.com/rangav/thunder-client-support/issues/216), [#611](https://github.com/rangav/thunder-client-support/issues/611), [#588](https://github.com/rangav/thunder-client-support/issues/588)
- Bearer Token is not renewed when switching environment [#588](https://github.com/rangav/thunder-client-support/issues/588)
- Generate OAuth `token and save locally` [#652](https://github.com/rangav/thunder-client-support/issues/652)
- When DB file changes show Reload Sidebar button
- Showing `ENV variables value` when hovering over them. [#184](https://github.com/rangav/thunder-client-support/issues/184)
- `Sidebar tree indentation` setting added [#807](https://github.com/rangav/thunder-client-support/issues/807)
- Switch Local / Global Env priority order [#749](https://github.com/rangav/thunder-client-support/issues/749)
- Allow Global & Local Environments to Link to .env file [#800](https://github.com/rangav/thunder-client-support/issues/800)
- Col Settings make Options tab as default

## Bug Fixes

- got library follow redirects not working [#799](https://github.com/rangav/thunder-client-support/issues/799)
- Env variable value gets corrupted when it has multiple $ symbols in it [#808](https://github.com/rangav/thunder-client-support/issues/808)
- JSON filter query not working with special characters [#798](https://github.com/rangav/thunder-client-support/issues/798)
- Importing `OpenAPI` v3 spec `adds baseUrl` variable [#803](https://github.com/rangav/thunder-client-support/issues/803)
- Collections Environment setting does not work as expected [#802](https://github.com/rangav/thunder-client-support/issues/802)

### Automatically Refresh Tokens

- The `OAuth tokens` will be refreshed automatically at request, folder & collection level
- The token values are saved locally and not in json files
- Save tokens per environment vscode setting added

<img width="800" alt="Screenshot 2022-10-03 at 16 17 15" src="https://user-images.githubusercontent.com/8637550/193614308-2f59c98c-3a58-41c6-a848-cb8b992a542a.png">

#### Save Token Per Environment

Please enable this setting to save different `OAuth 2 tokens` for dev & production environments.
<img width="800" alt="Screenshot 2022-10-03 at 16 20 52" src="https://user-images.githubusercontent.com/8637550/193614914-8fc59e5e-dc20-4a41-b033-dc476ce79cb3.png">

### Show Env Value on Hover

<img width="799" alt="Screenshot 2022-10-03 at 16 32 23" src="https://user-images.githubusercontent.com/8637550/193617625-7cde6b68-e8e4-429f-bd9f-56e6af56dde2.png">

### Sidebar Tree Indentation Setting

<img width="800" alt="Screenshot 2022-10-03 at 16 40 50" src="https://user-images.githubusercontent.com/8637550/193620304-0253989c-a7d3-4829-b44b-f997b12b7eef.png">

### Local & Global Env link to .env file

Now you can link `.env files` to Global & Local environments
<img width="800" alt="Screenshot 2022-10-03 at 16 47 31" src="https://user-images.githubusercontent.com/8637550/193621966-48268adb-212c-48f8-98a3-a79557499891.png">

# v1.19.3 - (2022-09-26)

## New Features

- `Generate types` from Json response [#785](https://github.com/rangav/thunder-client-support/issues/785), [#748](https://github.com/rangav/thunder-client-support/issues/748)
- Headers case-sensitive is enabled by default [#793](https://github.com/rangav/thunder-client-support/issues/793)
- Reading .env files improvements [#710](https://github.com/rangav/thunder-client-support/issues/710)

## Bug Fixes

- Collection headers do not override automatically created Request headers [#786](https://github.com/rangav/thunder-client-support/issues/786)
- Fix - Cancel Request displayed incorrectly

### Generate Types

Generate types from `json` response for `Typescript, Dart, Swift, Kotlin etc..`

<img width="800" alt="Screenshot 2022-09-26 at 03 50 04" src="https://user-images.githubusercontent.com/8637550/192185073-9a027a9a-b157-4bcd-b79a-9f9923802f39.png">

# v1.19.2 - (2022-09-20)

## New Features

- Manual `encode/decode` option for query params [#678](https://github.com/rangav/thunder-client-support/issues/678)
- Sidebar `right-click` show options menu [#623](https://github.com/rangav/thunder-client-support/issues/623)
- Hide body tab headings for small screens [#727](https://github.com/rangav/thunder-client-support/issues/727)

## Bug Fixes

- Fix - Base Url not working when Col setting value is env variable [#757](https://github.com/rangav/thunder-client-support/issues/757), [#775](https://github.com/rangav/thunder-client-support/issues/775)

### Query Param Encode/Decode

Now you can encode or decode query parameter values using menu options
<img width="787" alt="encode/decode" src="https://user-images.githubusercontent.com/8637550/191219265-f361315b-d220-4a12-bf53-2bf3f0858d04.png">

### Sidebar Right Click Menu

The request menu options can be activated using right click on any request to perform rename, delete etc..
<img width="281" alt="right-click menu" src="https://user-images.githubusercontent.com/8637550/191218010-9734679b-14c8-4cde-8608-c32e3fab6d55.png">

# v1.19.0 - (2022-09-15)

## New Features

- Support `editor themes` in response window [#243](https://github.com/rangav/thunder-client-support/issues/243)
- Run `Single request` from RunCollection View [#754](https://github.com/rangav/thunder-client-support/issues/754)
- Improve `convert to postman` format workflow [#738](https://github.com/rangav/thunder-client-support/issues/738)
- Increase Collapsable arrow size in JSON output? [#665](https://github.com/rangav/thunder-client-support/issues/665)

## Bug Fixes

- Fix - Same Number generation for Sys variable [#756](https://github.com/rangav/thunder-client-support/issues/756)
- Fix - Base Url is still appended, when request url has variable [#757](https://github.com/rangav/thunder-client-support/issues/757)

### Editor Themes

The extension now support vscode editor themes in response window.

Night Owl Theme
<img width="800" alt="Screenshot 2022-09-15 at 18 14 53" src="https://user-images.githubusercontent.com/8637550/190469525-5458c959-1d82-44c0-a8be-0b3e8bcfb5ea.png">

One Dark Pro Theme
<img width="800" alt="Screenshot 2022-09-15 at 18 16 37" src="https://user-images.githubusercontent.com/8637550/190469694-cb5a9894-d5c1-46ae-a4e2-537980f68fb6.png">

Bearded Theme Arc
<img width="800" alt="Screenshot 2022-09-15 at 18 17 28" src="https://user-images.githubusercontent.com/8637550/190469821-00c60308-dc99-4b90-aec9-b397abf2186a.png">

### Run Single Request

Now you can re-run single request from Run Collection View
<img width="800" alt="Screenshot 2022-09-15 at 19 09 58" src="https://user-images.githubusercontent.com/8637550/190478563-1ca34f85-8e59-45f2-8b4f-cb4e231b3ce0.png">

# v1.18.7 - (2022-08-23)

## New Features

- Base URL Prepend only for relative Url's [#741](https://github.com/rangav/thunder-client-support/issues/741)
- Vertical layout increase space for body content for small screens [#727](https://github.com/rangav/thunder-client-support/issues/727)

## Bug Fixes

- Fix - OAuth 2 remove scope from url when empty [#724](https://github.com/rangav/thunder-client-support/issues/724)
- Fix - html mode detection logic updated [#725](https://github.com/rangav/thunder-client-support/issues/725)
- Fix - The welcome to thunder client text is selectable [#739](https://github.com/rangav/thunder-client-support/issues/739)

# v1.18.3 - (2022-08-14)

## New Features

- Http Library `Axios` is added as alternative option [#170](https://github.com/rangav/thunder-client-support/issues/170), [#717](https://github.com/rangav/thunder-client-support/issues/717)
- Tests Action `notContains` option added [#721](https://github.com/rangav/thunder-client-support/issues/721)
- Access Arrays in Tests from `reverse order` using negative index `[-1]` [#719](https://github.com/rangav/thunder-client-support/issues/719)
- Provide option for `isJson=flase` test [#716](https://github.com/rangav/thunder-client-support/issues/716)
- Auto Format Xml based content not content type [#712](https://github.com/rangav/thunder-client-support/issues/712)

## Bug Fixes

- Fix Empty xml node adds new line in response [#600](https://github.com/rangav/thunder-client-support/issues/600)

#### Http Library Setting

- Lot of `localhost` connection refused issues are reported, so we are testing new library `axios`, please test and let me know feedback

<img width="800" alt="Screenshot 2022-08-14 at 19 36 05" src="https://user-images.githubusercontent.com/8637550/184550407-b48f98ad-ba42-45ce-a0ae-235a0c941e88.png">

#### New Tests Action `notContains` added

<img width="801" alt="Screenshot 2022-08-14 at 19 39 38" src="https://user-images.githubusercontent.com/8637550/184550530-314ddf74-69f2-4469-8d8a-ff5dd5207063.png">

#### Test for `Not Json` using value input

<img width="800" alt="Screenshot 2022-08-14 at 19 57 15" src="https://user-images.githubusercontent.com/8637550/184551075-fec118d5-c403-48fb-b641-5be8311e14b3.png">

#### Arrays in Tests has new filters

- Array index with `negative` numbers can access array from last e.g `json.names[-1]`
- Tests can also filter a array with a property value e.g `json.names[name=test]`

<img width="800" alt="Screenshot 2022-08-14 at 19 42 56" src="https://user-images.githubusercontent.com/8637550/184550769-429806ab-adbd-4627-8c73-2214f940d5f3.png">

# v1.18.0 - (2022-08-10)

## New Features

- `Run Collection` support for multiple iterations [#95](https://github.com/rangav/thunder-client-support/issues/95), [#56](https://github.com/rangav/thunder-client-support/issues/56)
  - User can input variables `data fom file`
  - You can add `delay` in millisecs between requests
- Added `Base URL` option in settings for Collections [#659](https://github.com/rangav/thunder-client-support/issues/659), [#316](https://github.com/rangav/thunder-client-support/issues/316)
- Added `Docs Tab` in Collection Settings for any Notes
- `Request Layout` vscode setting for horizontal / vertical [#703](https://github.com/rangav/thunder-client-support/issues/703), [#280](https://github.com/rangav/thunder-client-support/issues/280), [#99](https://github.com/rangav/thunder-client-support/issues/99)
- `Request Log`: vscode setting with Basic or Advanced log level [#697](https://github.com/rangav/thunder-client-support/issues/697)
- Tests in collections should override parent [#691](https://github.com/rangav/thunder-client-support/issues/691)
- Show regex expression when test fails [#698](https://github.com/rangav/thunder-client-support/issues/698)

## Bug Fixes

- Swagger Import default payloads of POST METHOD [#706](https://github.com/rangav/thunder-client-support/issues/706)
- GraphQL queries put quotes around empty variables array [#707](https://github.com/rangav/thunder-client-support/issues/707)
- System Variables: #enum fails with emoji [#709](https://github.com/rangav/thunder-client-support/issues/709)

### v1.18.1

- Fix Tests override issue for different action [#714](https://github.com/rangav/thunder-client-support/issues/714)
- Json schema test validation failed for format [#715](https://github.com/rangav/thunder-client-support/issues/715)

### Run Collection

Run collection now supports multiple iterations, Input variables data from file, and add delay below requests.
<img width="800" alt="runcol-1" src="https://user-images.githubusercontent.com/8637550/184144377-0a6b9493-7997-4f05-8b81-13dbcd8ae68f.png">

<img width="800" alt="runcol-2" src="https://user-images.githubusercontent.com/8637550/184156964-92a7d8ab-895b-40a8-ba2f-4da9ff43d3e5.png">

<p style="text-align: center;">When collection is running</p>

### Base Url & Docs Tabs

We added 2 new tabs to Collections settings
<img width="800" alt="base-url" src="https://user-images.githubusercontent.com/8637550/184144600-c4b9a877-1fef-4267-9386-8992a86ea356.png">

### New Settings

<img width="800" alt="settings" src="https://user-images.githubusercontent.com/8637550/184144684-93fe3299-c9ef-4fa6-8c05-1f8cbffe9789.png">

# v1.17.1 - (2022-08-02)

## New Features

- Extension editor custom `font size` setting option [#689](https://github.com/rangav/thunder-client-support/issues/689)
- Json Format `indent size` vscode setting [#379](https://github.com/rangav/thunder-client-support/issues/379)

# v1.17.0 - (2022-08-01)

## Code Snippet

- Code Snippet now supports more languages ( see image )
- Recently added for `Dart Http` & `PHP Laravel`
- Code for PHP Laravel is contributed by [@Thavarajan](https://github.com/Thavarajan)

![](https://github.com/rangav/thunder-client-support/blob/master/images/code-snippet.png?raw=true)

## New Features

- Support **`Code Snippet`** for more languages [#518](https://github.com/rangav/thunder-client-support/issues/518), [#399](https://github.com/rangav/thunder-client-support/issues/399), [#649](https://github.com/rangav/thunder-client-support/issues/649), [#484](https://github.com/rangav/thunder-client-support/issues/484)
- Import Collection/Environment from Url [#687](https://github.com/rangav/thunder-client-support/issues/687)
- Use Vscode `Editor Font settings` [#4](https://github.com/rangav/thunder-client-support/issues/4), [#410](https://github.com/rangav/thunder-client-support/issues/410), [#655](https://github.com/rangav/thunder-client-support/issues/655), [#377](https://github.com/rangav/thunder-client-support/issues/377), [#450](https://github.com/rangav/thunder-client-support/issues/450)
- Support use `PROPFIND` HTTP method [#674](https://github.com/rangav/thunder-client-support/issues/674)

## Bug Fixes

- AWS v4 signed requests with query strings fail signature verification [#682](https://github.com/rangav/thunder-client-support/issues/682)
- Extensions fails loading when using Gitpod on an iPad [#662](https://github.com/rangav/thunder-client-support/issues/662)

# v1.16.7 - (2022-07-19)

## New Features

- Make `Local Env` Exportable [#653](https://github.com/rangav/thunder-client-support/issues/653)
- Show request URL in Cookies tab [#607](https://github.com/rangav/thunder-client-support/issues/607)
- Show Release Notes on Extension Install

## Bug Fixes

- Import OpenAPI not creating folders [#664](https://github.com/rangav/thunder-client-support/issues/664)

# v1.16.6 - (2022-07-06)

## New Features

- `OAuth PKCE` support [#287](https://github.com/rangav/thunder-client-support/issues/287)

## Bug Fixes

- Change Environment keyboard shortcut issue [#642](https://github.com/rangav/thunder-client-support/issues/642)

# v1.16.5 - (2022-06-15)

## New Features

- Allow users to select Oauth2 `id_token` instead of `access_token` [#304](https://github.com/rangav/thunder-client-support/issues/304)
- Run tests on `Xml response` using Json Query option
  - Xml is converted json for running json query tests
  - You can see the converted json in Output Window
  - Set Env Variable works as well for xml response
- Show Requests count in Run Collection View [#613](https://github.com/rangav/thunder-client-support/issues/613)

## Bug Fixes

- Enter key on numeric keypad does not send the request [#606](https://github.com/rangav/thunder-client-support/issues/606)

# v1.16.4 - (2022-05-19)

## New Features

- Use `OS system environment variables` as global variables [#276](https://github.com/rangav/thunder-client-support/issues/276)
- System variable for `unix timestamp` [#599](https://github.com/rangav/thunder-client-support/issues/599)
- Set Env `variables to null` from tests tab [#562](https://github.com/rangav/thunder-client-support/issues/562)

## Bug Fixes

- Content length from tests are wrong [#598](https://github.com/rangav/thunder-client-support/issues/598)
- Form-encoded incorrect url encoding for (&) symbol [#587](https://github.com/rangav/thunder-client-support/issues/587)
- Path Variables are deleted whenever url is modified [#563](https://github.com/rangav/thunder-client-support/issues/563)
- Axios code snippet seems wrong for sending json data [#559](https://github.com/rangav/thunder-client-support/issues/559)
- Docs don't get saved after edit until Send is pressed again [#567](https://github.com/rangav/thunder-client-support/issues/567)

# v1.16.3 - (2022-05-05)

## New Features

- Extension `loading issues` fixed for vscode version `v1.67.0` [#585](https://github.com/rangav/thunder-client-support/issues/585), [#586](https://github.com/rangav/thunder-client-support/issues/586)

## Bug Fixes

- Fix Typo in Thunder Client test response [#569](https://github.com/rangav/thunder-client-support/issues/569)
- `{{#string}}` variable does not work as expected [#580](https://github.com/rangav/thunder-client-support/issues/580)
- Invalid characters in URL when pass percentages as query string [#552](https://github.com/rangav/thunder-client-support/issues/552)

# v1.16.2 - (2022-04-12)

## New Features

- Support for input `Chinese` & others languages [#161](https://github.com/rangav/thunder-client-support/issues/161), [#129](https://github.com/rangav/thunder-client-support/issues/129), [#535](https://github.com/rangav/thunder-client-support/issues/535)
- `Escape` keyboard shortcut to cancel `response full screen`

## Bug Fixes

- `Undo and redo` doesn't work on certain fields [#146](https://github.com/rangav/thunder-client-support/issues/146), [#365](https://github.com/rangav/thunder-client-support/issues/365)
- Input texts are `not scrolling` [#526](https://github.com/rangav/thunder-client-support/issues/526), [#308](https://github.com/rangav/thunder-client-support/issues/308), [#398](https://github.com/rangav/thunder-client-support/issues/398)
- Format issue with test with json schema [#541](https://github.com/rangav/thunder-client-support/issues/541)
- Import curl hotkey (ctrl-u) on OSX is bound to the qwerty layout [#542](https://github.com/rangav/thunder-client-support/issues/542)

# v1.16.0 - (2022-04-08)

## New Features

- **Database Upgrade** to `json` files from `.db` files [#500](https://github.com/rangav/thunder-client-support/issues/500), [#267](https://github.com/rangav/thunder-client-support/issues/267)

## Bug Fixes

- Fix Html response not working for chinese text [#534](https://github.com/rangav/thunder-client-support/issues/534)
- Fix Workspace Relative Path description not updated to reflect label change [#540](https://github.com/rangav/thunder-client-support/issues/540)

# v1.14.4 - (2022-04-01)

## New Features

- `New` keyword added to Docs tab to highlight it

## Bug Fixes

- fix of Documention value is not exported and imported

# v1.14.2 - (2022-03-30)

## New Features

- `Notes/Documentation tab` to save request details [#200](https://github.com/rangav/thunder-client-support/issues/200)
- Html View `Preview/Raw Html` will save the last user selection [#524](https://github.com/rangav/thunder-client-support/issues/524)
- Show Body tab for POST, PUT & PATCH requests [#404](https://github.com/rangav/thunder-client-support/issues/404), [#137](https://github.com/rangav/thunder-client-support/issues/137)
- Convert Environment to Postman Format [#416](https://github.com/rangav/thunder-client-support/issues/416)

## Bug Fixes

- Missed request body during CURL import [#523](https://github.com/rangav/thunder-client-support/issues/523)
- Bug fix string "null" not equals "null" in response body [#510](https://github.com/rangav/thunder-client-support/issues/510)
- Env var with value 0 is not is expanding when variable used in URL [#515](https://github.com/rangav/thunder-client-support/issues/515)

# v1.14.1 - (2022-03-26)

## New Features

- Display Html Preview as default view [#504](https://github.com/rangav/thunder-client-support/issues/504)
- Html Preview will now run scripts in html source

## Bug Fixes

- Set Env Value failed when json property value is `0` [#515](https://github.com/rangav/thunder-client-support/issues/515)
- Set Env from header failed for xml content type [#517](https://github.com/rangav/thunder-client-support/issues/517)
- XSS JS code breaks environment settings [#519](https://github.com/rangav/thunder-client-support/issues/519)

# v1.14.0 - (2022-03-23)

## New Features

- Import `OpenAPI` spec json/yaml [#84](https://github.com/rangav/thunder-client-support/issues/84)
- Import `Insomnia` collections/environments [#499](https://github.com/rangav/thunder-client-support/issues/499)
- Import `multiple/bulk` collections or environment files [#62](https://github.com/rangav/thunder-client-support/issues/62)
- JSON `Schema validation` in Tests tab [#495](https://github.com/rangav/thunder-client-support/issues/495)
- Support change prefix in Bearer Token Auth [#32](https://github.com/rangav/thunder-client-support/issues/32)
- OAuth2 add prefix, audience & resource fields [#359](https://github.com/rangav/thunder-client-support/issues/359)
- Log OAuth2 Request details to Output window [#359](https://github.com/rangav/thunder-client-support/issues/359)
- Handle auth inheritance when converting to Postman format [#503](https://github.com/rangav/thunder-client-support/issues/503)
- change setting from `Load from Project` to `Save to Workspace`

## Bug Fixes

- "Error: Invalid URL" Convert To Postman Format [#502](https://github.com/rangav/thunder-client-support/issues/502)

# v1.12.5 - (2022-03-09)

## New Features

- Feature - `AWS v4 Signature` Authentication [#489](https://github.com/rangav/thunder-client-support/issues/489)

## Bug Fixes

- Cookies are only sent for the first request [#164](https://github.com/rangav/thunder-client-support/issues/164)
- Local environment needs "delete and re-enable" to work [#486](https://github.com/rangav/thunder-client-support/issues/486)
- Overwritten my custom content-type after new release [#485](https://github.com/rangav/thunder-client-support/issues/485), [#496](https://github.com/rangav/thunder-client-support/issues/496)
- When cookie name contains . then the extension throws error [#483](https://github.com/rangav/thunder-client-support/issues/483)
- When request body is binary, content type should be application/octet-stream [#487](https://github.com/rangav/thunder-client-support/issues/487)

# v1.12.2 - (2022-02-25)

## New Features

- `Enum & Bool` System variables [#476](https://github.com/rangav/thunder-client-support/issues/476)
- Set json part to Env variable in Tests tab [#477](https://github.com/rangav/thunder-client-support/issues/477)
- Headers of the same name are overridden [#475](https://github.com/rangav/thunder-client-support/issues/475)
- Header names are transformed into lowercase [#458](https://github.com/rangav/thunder-client-support/issues/458)
  - New Vscode setting provided to send Headers in same case as in request
  - Enable the Setting `Headers Case Sensitive`

## Bug Fixes

- Bug Fix for **Reload data** option showing in all views [#478](https://github.com/rangav/thunder-client-support/issues/478)
- Global Envs are not working when Local Env exists [#480](https://github.com/rangav/thunder-client-support/issues/480)

# v1.12.1 - (2022-02-18)

## New Features

- Response Time Column in Run Collection View [#472](https://github.com/rangav/thunder-client-support/issues/472)

## Bug Fixes

- Conversion to Postman collection failing when using variable in request URL [#473](https://github.com/rangav/thunder-client-support/issues/473)

# v1.12.0 - (2022-02-16)

## New Features

- **Export Results** of run collection tests to `CSV & JSON` [#402](https://github.com/rangav/thunder-client-support/issues/402), [#428](https://github.com/rangav/thunder-client-support/issues/428)
- **SaveRequest On Send** vscode setting to disable saving request on `Send` button click, Only save when explicitly saved by using `Ctrl/Cmd+S` [#446](https://github.com/rangav/thunder-client-support/issues/446), [#393](https://github.com/rangav/thunder-client-support/issues/393)
- Export to **Postman format** [#162](https://github.com/rangav/thunder-client-support/issues/162), [#416](https://github.com/rangav/thunder-client-support/issues/416)
  - From Command Palette - `Convert To Postman Format` option available
  - From Sidebar menu at the Top `(...)`
- Quick **Change Environment** from Status Bar [#354](https://github.com/rangav/thunder-client-support/issues/354), [#346](https://github.com/rangav/thunder-client-support/issues/346)
  - Active Environment will be displayed in `StatusBar at the bottom`, clicking on it will display the options to change the Active Env
  - From Keyboard - `Ctrl/Cmd+E` shortcut
  - From Command Palette - Change Environment option available
- **Reordering** of Environment Variables [#414](https://github.com/rangav/thunder-client-support/issues/414)
- Env **Variables highlight** in Request body
- vscode setting for Request Timeouts [#362](https://github.com/rangav/thunder-client-support/issues/362)
- **Open in Code** option for response data [#385](https://github.com/rangav/thunder-client-support/issues/385)
- How to disable automatic line **wrapping** in response? [#392](https://github.com/rangav/thunder-client-support/issues/392)

## Bug Fixes

- JSON Query for property names with non-alphanum chars [#348](https://github.com/rangav/thunder-client-support/issues/348)
- Incorrectly shows response as binary in v1.11.0 [#452](https://github.com/rangav/thunder-client-support/issues/452)
- cURL import of json from chrome not working [#328](https://github.com/rangav/thunder-client-support/issues/328)
- Large numbers are truncated & Float numbers [#88](https://github.com/rangav/thunder-client-support/issues/88), [#370](https://github.com/rangav/thunder-client-support/issues/370)

# v1.11.1 - (2022-01-27)

The new action bar shortcut changed to `ctrl+shift+r`

## Bug Fixes

- Bug fix for vnd.vizrt.payload+xml showing as binary [#452](https://github.com/rangav/thunder-client-support/issues/452)
- Shortcut overrides a basic VS Code key binding [#451](https://github.com/rangav/thunder-client-support/issues/451)

# v1.11.0 - (2022-01-26)

## New Features

- **Ntlm Authentication** feature [#117](https://github.com/rangav/thunder-client-support/issues/117)
- **Save file option** for Binary response [#141](https://github.com/rangav/thunder-client-support/issues/141), [#334](https://github.com/rangav/thunder-client-support/issues/334), [#356](https://github.com/rangav/thunder-client-support/issues/356)
- Sidebar request item **highlight** [#269](https://github.com/rangav/thunder-client-support/issues/269) [#422](https://github.com/rangav/thunder-client-support/issues/422)
- Option to Stop running collection [#364](https://github.com/rangav/thunder-client-support/issues/364)
- Sidebar Enhance filter functionality [#419](https://github.com/rangav/thunder-client-support/issues/419)
- Duplicate request option in Activity tab [#335](https://github.com/rangav/thunder-client-support/issues/335)
- Add popover to Thunder client icon in action bar with shortcut key [#342](https://github.com/rangav/thunder-client-support/issues/342)
- Redirects with same method instead of GET in Thunder Client [#388](https://github.com/rangav/thunder-client-support/issues/388)
- Codegen json data updated for Python and JS [#395](https://github.com/rangav/thunder-client-support/issues/395)
- Set Active Env dont update modified date [#448](https://github.com/rangav/thunder-client-support/issues/448)
- Sidebar navigation improvements for rename, delete & view
- Basic Auth show password button icon added

## Bug Fixes

- Bug fix: Run Collection hanging [#407](https://github.com/rangav/thunder-client-support/issues/407)
- Renamed requests reverts to old name after being sent [#378](https://github.com/rangav/thunder-client-support/issues/378)
- Run Last Request not working for Reqs in Activity

# v1.10.0 - (2022-01-17)

## News

- Thunder Client downloads crossed `500k` in 2021
- Website domain changed from `.io to thunderclient.com`

## New Features

- **Local Environment** feature to exclude secrets [#441](https://github.com/rangav/thunder-client-support/issues/441), [#267](https://github.com/rangav/thunder-client-support/issues/267), [#79](https://github.com/rangav/thunder-client-support/issues/79)
- **Dart lang** codegen support
- Code Snippet **graphql** support [#302](https://github.com/rangav/thunder-client-support/issues/302)
- Settings option to enable **http2** request [#104](https://github.com/rangav/thunder-client-support/issues/104)
- **Copy Response** button in right panel [#426](https://github.com/rangav/thunder-client-support/issues/426)
- Open New Tab should open same request in new tab [#300](https://github.com/rangav/thunder-client-support/issues/300)
- Change request page title length [#301](https://github.com/rangav/thunder-client-support/issues/301)
- Hint text is needed for search shortcuts [#405](https://github.com/rangav/thunder-client-support/issues/405)
- Allow empty passwords in Basic Auth [#380](https://github.com/rangav/thunder-client-support/issues/380)
- Json Syntax error indicator under the text block [#389](https://github.com/rangav/thunder-client-support/issues/389)

## Bug Fixes

- Format JSON body doesn't work when names contain colons [#345](https://github.com/rangav/thunder-client-support/issues/345), [#333](https://github.com/rangav/thunder-client-support/issues/333)
- Auth http calls should ignore ssl errors [#225](https://github.com/rangav/thunder-client-support/issues/225)
- In dark theme Cancel Request option on hover is not visible. [#429](https://github.com/rangav/thunder-client-support/issues/429)
- Auth settings not imported from a previously exported json [#443](https://github.com/rangav/thunder-client-support/issues/443)
- Content-Type is added twice to codegen [#394](https://github.com/rangav/thunder-client-support/issues/394)
- Inherit authentication doesn't work [#381](https://github.com/rangav/thunder-client-support/issues/381)
- Vertical Panes extremely difficult to resize [#305](https://github.com/rangav/thunder-client-support/issues/305)
- Cannot set env variable on JSON when content-type is missing [#331](https://github.com/rangav/thunder-client-support/issues/331)
- Test results failed when graphql return data: null [#368](https://github.com/rangav/thunder-client-support/issues/368)

# v1.9.1 - (2021-08-17)

## Bug Fixes

- Fixes Path Variable overlap with Env Variable in v1.9.0 [#23](https://github.com/rangav/thunder-client-support/issues/23)

# v1.9.0 - (2021-08-12)

## New Features

- **Collection level** auth, headers & Tests [#33](https://github.com/rangav/thunder-client-support/issues/33)
- Ability to **attach ENV** to a specific collection [#173](https://github.com/rangav/thunder-client-support/issues/173)
- Set Env Variable with scope option [#33](https://github.com/rangav/thunder-client-support/issues/33)
- Support for **Path Variables** [#23](https://github.com/rangav/thunder-client-support/issues/23)
- **Binary file** upload [#273](https://github.com/rangav/thunder-client-support/issues/273)
- Tests **regex match** option for tests like email, url [#57](https://github.com/rangav/thunder-client-support/issues/57)
- Button to clear cookies [#271](https://github.com/rangav/thunder-client-support/issues/271)
- Live Syntax Checking for JSON body [#263](https://github.com/rangav/thunder-client-support/issues/263)
- Add Convert Javascript Object to JSON [#285](https://github.com/rangav/thunder-client-support/issues/285)
- System variable randomNumber with custom range [#270](https://github.com/rangav/thunder-client-support/issues/270)
- System variable date with custom format [#256](https://github.com/rangav/thunder-client-support/issues/256)
- Codegen C# does not include 'File' form body fields [#288](https://github.com/rangav/thunder-client-support/issues/288)
- Show selected "Environment" on Request Page [#159](https://github.com/rangav/thunder-client-support/issues/159)
- Code Snippet support for **PowerShell**

# v1.8.1 - (2021-07-27)

## Bug Fixes

- Fixes Requests not adding to Activity in v1.8.0 [#281](https://github.com/rangav/thunder-client-support/issues/281)

# v1.8.0 - (2021-07-26)

## New Features

- Global environment variables [#70](https://github.com/rangav/thunder-client-support/issues/70)
  - `Enable Global` menu option provided in Env Tab
- Link .env file to Environment option [#74](https://github.com/rangav/thunder-client-support/issues/74)
  - Click on the environment you will see option `Link to .env file` and also you can override any variable with local variables.
- Separate activity requests into thunderActivity.db [#208](https://github.com/rangav/thunder-client-support/issues/208)
- Update request date only when content changes [#208](https://github.com/rangav/thunder-client-support/issues/208)
- Save request using `cmd/ctrl + s`
- Option to open request in a new tab [#246](https://github.com/rangav/thunder-client-support/issues/246), [#203](https://github.com/rangav/thunder-client-support/issues/203)
  - `Open in New Tab` menu option
  - `Ctrl/Cmd + Click` on request will open in new tab
- Remove default url for new request from collections tab [#204](https://github.com/rangav/thunder-client-support/issues/204)
- Bearer token input changed to textarea [#248](https://github.com/rangav/thunder-client-support/issues/248)
- Setting Option to configure whether to `follow redirects` [#239](https://github.com/rangav/thunder-client-support/issues/239)
- Setting option to enable show requests run from Collection in Activity [#236](https://github.com/rangav/thunder-client-support/issues/236)

## Bug Fixes

- Fixes Thunder client Response file size issue [#262](https://github.com/rangav/thunder-client-support/issues/262)

# v1.7.1 - (2021-07-14)

## Bug Fixes

- Fixes Text Response not working in v1.7.0 [#265](https://github.com/rangav/thunder-client-support/issues/265)

# v1.7.0 - (2021-07-13)

## New Features

- Duplicate Folder & Collection option
- Import Environment from .env file [#74](https://github.com/rangav/thunder-client-support/issues/74)
- Show Request View Vertically in Split Mode [#99](https://github.com/rangav/thunder-client-support/issues/99)
- Display of response for images [#97](https://github.com/rangav/thunder-client-support/issues/97)
- Sort Env using Drag & Drop
- Support client certificate auth using mutual TLS [#130](https://github.com/rangav/thunder-client-support/issues/130)
- System variable {{#guid}} added [#253](https://github.com/rangav/thunder-client-support/issues/253)

## Bug Fixes

- Fixes Response Window is Missing on Zoom out [#205](https://github.com/rangav/thunder-client-support/issues/205)
- Fixes NO-BREAK SPACE Issue [#199](https://github.com/rangav/thunder-client-support/issues/199)
- Hide SetTo action option in Tests Tab [#242](https://github.com/rangav/thunder-client-support/issues/242)

# v1.6.1 - (2021-06-29)

## Bug Fixes

- Fixes Basic auth not working in v1.6.0 [#241](https://github.com/rangav/thunder-client-support/issues/241)

# v1.6.0 - (2021-06-29)

## New Features

- Duplicate Environment option [#232](https://github.com/rangav/thunder-client-support/issues/232)
- Codegen is now separate project, open for contribution on [github](https://github.com/rangav/thunder-codegen)

## Bug Fixes

- Fixes Environment View display error [#240](https://github.com/rangav/thunder-client-support/issues/240)
- Fix codegen curl space after backslash [#228](https://github.com/rangav/thunder-client-support/issues/228)

# v1.5.0 - (2021-06-24)

## New Features

- Code Snippet Generation support for Curl, C# HttpClient, Javascript, Python. Click on `{ }` icon for Code tab
- Save Disables Inputs for Query & Form
- Postman import disabled fields
- Env Tab `Set Default` option renamed to `Set Active`

## Bug Fixes

- Fixes Env View special chars display error [#215](https://github.com/rangav/thunder-client-support/issues/215) [#201](https://github.com/rangav/thunder-client-support/issues/201)
- Fixes Html preview should be based on response data [#190](https://github.com/rangav/thunder-client-support/issues/190) [#192](https://github.com/rangav/thunder-client-support/issues/192)

# v1.4.1 - (2021-06-08)

## Bug Fixes

- Fixes Import Env Bug
- Fixes Tests Env bug

# v1.4.0 - (2021-06-03)

## New Features

- Clear All Acticity Menu Option
- Sorting of Collections now possible
- Sort Tests using Drag & Drop
- Run Request on Enter key
- Views File Icon added
- Lincese file included

## Bug Fixes

- Fixes Form-encoded fields encoding issue [#174](https://github.com/rangav/thunder-client-support/issues/174)
- Fixes Query parameter that ends with '=' gets cleared [#166](https://github.com/rangav/thunder-client-support/issues/166)
- Fixes Tests bool true/false and null check tests
- Fixes When no response, set env var error [#180](https://github.com/rangav/thunder-client-support/issues/180)
- Fixes remove plus sign encoding from URL

# v1.3.0 - (2021-05-18)

## Announcement

- We have crossed **100K downloads** from vscode marketplace, thanks everyone for the support.

## New Features

- Import Curl Command
- Html Preview option for Html response.
- System/Dynamic Variables for random values of string, number email, date
- Headers bulk/raw edit mode
- OAuth 2.0 password credentials option
- Support relative paths for git folder location, see readme.
- Proxy exclude hosts option in settings
- Environment Variables multi-level expansion

## Bug Fixes

- Fixes OAuth 2 client authentication option missing
- Fixes Empty thunderclient.db files created for every project
- Fixes New request window not created in active split pane
- Fixes {{envVar}} in test is replaced with actual value after the test runs
- Request Url encoding issues fixes

# v1.2.2 - (2021-05-07)

**Feature Changed**

- The set variable from header and cookie implementation changed
  - The prefix for set var from header is `header.` instead of `h:`
  - The prefix for set var from cookie is `cookie.` instead of `c:`
  - See documentation for updated details
- The set env var fields are green color highlighted now.

# v1.2.1 - (2021-05-06)

## New Features

- File Upload feature now supports field name
- Set Env Var from text response, Headers and Cookie.
- Run Collection Requests are clickable links.
- Format json text when header is text/plain
- Enable Body in GET request

## Bug Fixes

- Fixes space not encoded in Url
- Fixes Request error causes spinning without finishing
- Fixes Postman Import failed error for files
- Fixes Basic auth password should not be plain text field

# v1.2.0 - (2021-05-03)

## New Features

- File Upload feature in Post Body
- Postman Import files support

## Bug Fixes

- Fixes 'Failed to import' error message after cancelling Collections import
- Fixes + plus sign in query parameter not escaping
- Fixes Expands the variable name nested inside another var value
- Fixes Run Collection folders & requests sort order wrong

# v1.1.0 - (2021-04-29)

## New Features

This will be major release with team features.

- **Custom Storage Location** for Collections, useful for teams to integrate with git
- **Nested folder support** for Collections
- Improved request creation workflow to save to collections faster
- **Run Last Request** from command palette.
- **Drap & Drop sorting** for requests & folders
- Support Ctrl+S to save env vars
- Create variable in env if doesn't exist when set
- Postman import nested folder support
- Proxy Support
- Lot of Bug fixes

For complete details of the update [visit here](https://github.com/rangav/thunder-client-support/issues/14)

# v1.0.7 - (2021-04-08)

## Bug Fixes

- Fixed Postman Import error when request url is empty

# v1.0.6 - (2021-04-07)

## New Features

- Fixes Postman import request body issue
- Cmd/Ctrl+Enter to execute request
- Set Environment Variable in Tests tab

# v1.0.5 - (2021-04-01)

## New Features

- privacy and import/export sections added to readme

# v1.0.0 - (2021-03-31)

## Official Launch

- Initial Release - Official Launch

</details>

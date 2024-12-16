## 安裝與執行指引
### **1. 下載專案**
克隆專案並切換至專案目錄
```bash
git clone https://github.com/kevin083177/StudentHub.git
cd yourPath/StudentHub
```

### **2. 前端安裝與執行**
進入前端`Frontend`目錄，安裝依賴並執行
```bash
cd Frontend
npm install
```

配置環境變數
將 .env.example 文件修改為您的設定，並重命名為 .env
```env
VITE_IP = api_url   #api位置
```

啟動前端開發伺服器
```bash
npm run dev
```

### 3. **後端安裝與執行**
進入後端`Backend`目錄，安裝依賴並執行
```bash
cd Backend
npm install
```

配置環境變數
將 .env.example 文件修改為您的設定，並重命名為 .env

```env
DBUSER=test               # 資料庫使用者
DBPASSWORD=password       # 資料庫密碼
DBHOST=127.0.0.1          # 資料庫連線位置
DBPORT=8974               # 資料庫連線埠
DBNAME=name               # 資料庫名稱
PORT=2083                 # 後端監聽位置
LogPath=logs              # log生成位置
assetsPath=/assets        # assets生成位置
HomePagePath=/index.html  # 首頁位置
privateKey=key            # 私密金鑰
```

啟動後端開發伺服器
```bash
npm run dev
```

### 4. **資料庫連線**
系統使用 MongoDB 作為資料庫，請確保安裝並啟動 MongoDB。  
使用 `students` collection 並參考範例數據檔案：`studentslist.csv`。  
範例資料：
```json
{
  "userName": "tkuim0867",
  "sid": 8,
  "name": "楊怡萱",
  "department": "資訊管理系",
  "grade": "三年級",
  "class": "B",
  "email": "tkuim0867@tkuim.com"
}
```

## API 規格說明
### 1.查詢所有學生資料
+ **URL**
    + `GET /api/v1/user/findAll`
+ ###### Response
    - 200
        ```json
        {
            "code": 200,
            "message": "find sucess",
            "body": [
                {
                    "_id": "675ed9f4bc8f2ebc70989e03",
                    "userName": "tkuee0787",
                    "sid": "1",
                    "name": "張佳慧",
                    "department": "電機工程系",
                    "grade": "四年級",
                    "class": "A",
                    "email": "tkuee0787@tkuim.com"
                },...
            ]
        }
        ```
### 2.根據 ID 或姓名查詢學生資料
+ **URL**
    + `GET /api/v1/user/findById`
    + `GET /api/v1/user/findByName`
+ ###### Request

    ```
    id=675ed9f4bc8f2ebc70989e03
    ```
    or
    ```
    name=張佳慧
    ```

+ ###### Response
    - 200 
        ```json
        {
            "code": 200,
            "message": "find success",
            "body": {
                "_id": "675ed9f4bc8f2ebc70989e03",
                "userName": "tkuee0787",
                "sid": "1",
                "name": "張佳慧",
                "department": "電機工程系",
                "grade": "四年級",
                "class": "A",
                "email": "tkuee0787@tkuim.com"
            }
        }
        ```
    - 404
        ```json
        {
            "code": 404,
            "message": "user not found"
        }
        ```
    - 500 
        ```json
        {
            "code": 500,
            "message": "server error"
        }
        ```
### 3.新增學生資料
+ **URL**
    + `POST /api/v1/user/insertOne`
+ ###### Request
    ```json
    {
        "userName":"tku1234",
        "name": "王大明",
        "department": "機械工程系",
        "grade": "六年級",
        "class": "B",
        "email": "tkume1234@tku.com"
    }
    ```
+ ###### Response
    - 200
        ```json
        {
            "code": 200,
            "message": "insert success",
            "body": {
                "userName":"tku1234",
                "name": "王大明",
                "department": "機械工程系",
                "grade": "六年級",
                "class": "B",
                "email": "tkume1234@tku.com",
                "_id": "675edf9682c1d21d9087d6ec"
            }
        }
        ```
    - 403
        ```json
        {
            "code": 403,
            "message": "座號已存在"
        }
        ```
        ```json
        {
            "code": 403,
            "message": "student list is full"
        }
        ```
    - 500
        ```json
        {
            "code": 500,
            "message": "server error"
        }
        ```
### 4.根據 ID 或姓名刪除學生資料
+ **URL** 
    + `DELETE /api/v1/user/DeleteById`
    + `DELETE /api/v1/user/DeleteByName`
+ ###### Request
    ```
    id=675ed9f4bc8f2ebc70989e03
    ```
    or
    ```
    name=張佳慧
    ```
+ ###### Response
    - 200
        ```json
        {
            "code": 200,
            "message": "sucess",
            "body": {
                "acknowledged": true,
                "deletedCount": 1
            }
        }
        ```
    - 404
        ```json
        {
            "code": 404,
            "message": "user not found"
        }
        ```
    - 500
        ```json
        {
            "code": 500,
            "message": "server error"
        }
        ```
### 5.根據 ID 或姓名更新學生資料
+ **URL**
    + `PUT /api/v1/user/UpdateById`
    + `PUT /api/v1/user/UpdateByName`
+ ###### Request
    ```
    id=675ed9f4bc8f2ebc70989e03
    ```
    or
    ```
    name=張佳慧
    ```
    and
    ```json
    {
        //選擇修改之資訊即可
        "department": "資訊管理學系",
    }
    ```
+ ###### Response
    - 200
        ```json
        {
            "code": 200,
            "message": "Update successful",
            "body": {
                "_id": "675ed9f4bc8f2ebc70989e03",
                "userName": "tkumb1234",
                "sid": "1",
                "name": "張佳慧",
                "department": "資訊管理學系",
                "grade": "四年級",
                "class": "A",
                "email": "tkuee0787@tkuim.com"
            }
        }
        ```
    - 404
        ```json
        {
            "code": 404,
            "message": "user not found"
        }
        ```
    - 500
        ```json
        {
            "code": 500,
            "message": "server error"
        }
        ```
## 架構圖
![diagram](https://i.imgur.com/LIwblC0.png)

## 流程圖
![flowchart](https://i.imgur.com/zcdhWcT.png)

## Demo
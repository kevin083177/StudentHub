# StudentHub

## 安裝與執行指引

#### 下載專案
clone 專案
`git clone https://github.com/kevin083177/StudentHub.git`

切換到專案目錄
`cd yourPath/StudentHub`

#### 前端安裝與執行

切換到`Frontend`目錄並安裝依賴
```bash
cd Frontend
npm install --dependencies
```

修改`.env.example`內容並改名為`.env`

```env
VITE_IP = api_url   #api位置
```

運行
```bash
npm run dev
```

#### 後端安裝與執行

切換到`Backend`目錄並安裝依賴
```bash
cd Backend
npm install --dependencies
```

修改`.env.example`內容並改名為`.env`
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
運行
```bash
npm run dev
```

#### 資料庫
連接Mongodb指定Collection:`students`
可參考範例資料`studentslist.csv`
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
+ **GET** `/api/v1/user/findAll`(取得所有學生資料)
    ```ts
    public async getAllStudents():Promise<Array<DBResp<Student>>|undefined>
    ```
    ###### Response
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
+ **GET** `/api/v1/user/findById`, `/api/v1/user/findByName`(根據ID/姓名為索引取得學生資料)
    ```ts
    public async findById(id: string):Promise<resp<DBResp<Student> | undefined>>
    public async findByName(name: string):Promise<resp<DBResp<Student> | undefined>>
    ```
    ###### Request

    ```
    id=675ed9f4bc8f2ebc70989e03
    ```
    or
    ```
    name=張佳慧
    ```

    ###### Response
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
+ **POST** `/api/v1/user/insertOne`(新增學生資料)
    ```ts
    public async insertOne(info: Student):Promise<resp<DBResp<Student> | undefined>>
    ```
    ###### Request
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
    ###### Response
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
    or
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
+ **DELETE** `/api/v1/user/DeleteById`, `/api/v1/user/DeleteByName`(根據ID/姓名為索引刪除學生資料)
    ```ts
    public async deletedById(id:string):Promise<resp<DBResp<Student> | undefined>>
    public async deletedByName(name:string):Promise<resp<DBResp<Student> | undefined>>
    ```
    ###### Request
    ```
    id=675ed9f4bc8f2ebc70989e03
    ```
    or
    ```
    name=張佳慧
    ```
    ###### Response
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
+ **PUT** `/api/v1/user/UpdateById`, `/api/v1/user/UpdateByName`(根據ID/姓名為索引更新學生資料)
    ```ts
    public async updateById(id: string, updateData: Student): Promise<resp<DBResp<Student> | undefined>>
    public async updateByName(old_name: string, updateData: Student): Promise<resp<DBResp<Student> | undefined>>
    ```
    ###### Request
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
    ###### Response
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
## 流程圖 / 架構圖
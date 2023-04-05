## TODO LIST REST API docs 

------------------------------------------------------------------
#### Read all todo list  //讀取所有代辦事項

<details>
 <summary><code>GET</code> <code><b>/</b></code> <code>
todoList</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `讀取代辦事項成功`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"讀取代辦事項失敗"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |


</details>

------------------------------------------------------------------------------------------



#### Creating new todo  //創建新代辦事項

<details>
 <summary><code>POST</code> <code><b>/</b></code> <code>
todoList</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | content      |  required | String  | N/A  |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `新建代辦事項成功`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"新建代辦事項失敗"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |


</details>

------------------------------------------------------------------------------------------

#### Delete todo  //刪除代辦事項

<details>
 <summary><code>DELETE</code> <code><b>/</b></code> <code>
todoList</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | ID      |  required | Number  | N/A  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `刪除代辦事項成功`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"刪除代辦事項失敗"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |


</details>

------------------------------------------------------------------------------------------

#### Edit todo  //編輯代辦事項

<details>
 <summary><code>DELETE</code> <code><b>/</b></code> <code>
todoList</code></summary>

##### Parameters

> | name      |  type     | data type               | description                                                           |
> |-----------|-----------|-------------------------|-----------------------------------------------------------------------|
> | ID      |  required | Number  | N/A  |
> | content      |  required | String  | N/A  |


##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `201`         | `text/plain;charset=UTF-8`        | `編輯代辦事項成功`                                |
> | `400`         | `application/json`                | `{"code":"400","message":"編輯代辦事項失敗"}`                            |
> | `405`         | `text/html;charset=utf-8`         | None                                                                |


</details>

------------------------------------------------------------------------------------------
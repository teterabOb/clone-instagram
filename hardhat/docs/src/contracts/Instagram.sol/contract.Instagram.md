# Instagram
[Git Source](https://github.com/teterabOb/clone-instagram/blob/1ea577b9d1cf234eabd934c4a31dee0cbe3ff732/contracts/Instagram.sol)

**Author:**
Gilberts Ahumada

You can use this contract to emulate descentralized web3 social app

*A este contrato le faltan mas funcionalidades pero cumple con lo minimo*


## State Variables
### s_postCounterId
Counter for posts


```solidity
uint256 public s_postCounterId;
```


### s_posts
Mapping para almacenar los posts y su identificador


```solidity
mapping(uint256 => Post) private s_posts;
```


### s_postsUser
Mapping para almacenar los posts de cada usuario


```solidity
mapping(address => mapping(uint256 => Post)) private s_postsUser;
```


### s_postsCounterByUser
Conteo de posts por usuario


```solidity
mapping(address => uint256) private s_postsCounterByUser;
```


### s_likesOfPost
Likes en las publicaciones según PostId


```solidity
mapping(uint256 => address[]) private s_likesOfPost;
```


## Functions
### addPost

Añade un nuevo post


```solidity
function addPost(Post memory _post) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_post`|`Post`|La estructura del post que contiene la descripción y el URI|


### like

Da like a un post


```solidity
function like(uint256 _postId) external postsExists(_postId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_postId`|`uint256`|El identificador del post|


### unlike

Quita el like de un post


```solidity
function unlike(uint256 _postId) external postsExists(_postId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_postId`|`uint256`|El identificador del post|


### getPost

Obtiene un post por su identificador


```solidity
function getPost(uint256 _postId) public view postsExists(_postId) returns (Post memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_postId`|`uint256`|El identificador del post|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Post`|La estructura del post|


### getPostUser

Obtiene un post de un usuario por su identificador


```solidity
function getPostUser(address _user, uint256 _postId) public view postsExists(_postId) returns (Post memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|La dirección del usuario|
|`_postId`|`uint256`|El identificador del post|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Post`|La estructura del post|


### getPostsCounterByUser

Obtiene el conteo de posts de un usuario


```solidity
function getPostsCounterByUser(address _user) public view returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_user`|`address`|La dirección del usuario|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|El número de posts del usuario|


### getLikesOfPost

Obtiene el número de likes de un post


```solidity
function getLikesOfPost(uint256 _postId) public view postsExists(_postId) returns (uint256);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_postId`|`uint256`|El identificador del post|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`uint256`|El número de likes del post|


### getUri

Obtiene el URI de un post


```solidity
function getUri(uint256 _postId) public view postsExists(_postId) returns (string memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_postId`|`uint256`|El identificador del post|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`string`|El URI del post|


### getAllPosts

Obtiene todos los posts en un rango de identificadores


```solidity
function getAllPosts(uint256 _start, uint256 _end) public view returns (Post[] memory);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_start`|`uint256`|El identificador inicial|
|`_end`|`uint256`|El identificador final|

**Returns**

|Name|Type|Description|
|----|----|-----------|
|`<none>`|`Post[]`|Un array de posts en el rango especificado|


### postsExists

Modificador para verificar si un post existe


```solidity
modifier postsExists(uint256 _postId);
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_postId`|`uint256`|El identificador del post|


## Events
### PostAdded
Evento emitido cuando se añade un nuevo post


```solidity
event PostAdded(uint256 indexed postId, string description, address owner);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`postId`|`uint256`|El identificador del post|
|`description`|`string`|La descripción del post|
|`owner`|`address`|La dirección del propietario del post|

### Like
Evento emitido cuando un usuario da like a un post


```solidity
event Like(uint256 indexed postId, address user);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`postId`|`uint256`|El identificador del post|
|`user`|`address`|La dirección del usuario que dio like|

### Unlike
Evento emitido cuando un usuario quita su like de un post


```solidity
event Unlike(uint256 indexed postId, address user);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`postId`|`uint256`|El identificador del post|
|`user`|`address`|La dirección del usuario que quitó su like|

## Errors
### PostDoesNotExist
Error lanzado cuando un post no existe


```solidity
error PostDoesNotExist(uint256 postId);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`postId`|`uint256`|El identificador del post que no existe|

## Structs
### Post
*Un struct que define o representa un post en la plataforma*


```solidity
struct Post {
    string description;
    string uri;
}
```

**Properties**

|Name|Type|Description|
|----|----|-----------|
|`description`|`string`|la descripcion del post|
|`uri`|`string`|la uri del post en IPFS|


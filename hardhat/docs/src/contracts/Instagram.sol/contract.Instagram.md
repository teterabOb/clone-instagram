# Instagram
[Git Source](https://github.com/teterabOb/clone-instagram/blob/828f80dc9762283cf91205e487cbbcfbaaf13634/contracts/Instagram.sol)

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
mapping para almacenar los posts y su identificador


```solidity
mapping(uint256 => Post) private s_posts;
```


### s_postsUser

```solidity
mapping(address => mapping(uint256 => Post)) private s_postsUser;
```


### s_postsCounterByUser

```solidity
mapping(address => uint256) private s_postsCounterByUser;
```


### s_likesOfPost

```solidity
mapping(uint256 => address[]) private s_likesOfPost;
```


## Functions
### addPost

Recupera un post específico de un usuario en la plataforma de Instagram.


```solidity
function addPost(Post memory _post) external;
```
**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`_post`|`Post`|Toda la informacion del post|


### like


```solidity
function like(uint256 _postId) external postsExists(_postId);
```

### unlike


```solidity
function unlike(uint256 _postId) external postsExists(_postId);
```

### getPost


```solidity
function getPost(uint256 _postId) public view postsExists(_postId) returns (Post memory);
```

### getPostUser


```solidity
function getPostUser(address _user, uint256 _postId) public view postsExists(_postId) returns (Post memory);
```

### getPostsCounterByUser


```solidity
function getPostsCounterByUser(address _user) public view returns (uint256);
```

### getLikesOfPost


```solidity
function getLikesOfPost(uint256 _postId) public view postsExists(_postId) returns (uint256);
```

### getUri


```solidity
function getUri(uint256 _postId) public view postsExists(_postId) returns (string memory);
```

### getAllPosts


```solidity
function getAllPosts(uint256 _start, uint256 _end) public view returns (Post[] memory);
```

### postsExists


```solidity
modifier postsExists(uint256 _postId);
```

## Events
### PostAdded
*Emite cuando se crea un nuevo post.*


```solidity
event PostAdded(uint256 indexed postId, string description, address owner);
```

**Parameters**

|Name|Type|Description|
|----|----|-----------|
|`postId`|`uint256`|El ID del post recién creado.|
|`description`|`string`|La descripción del post.|
|`owner`|`address`|La dirección del creador del post.|

### Like

```solidity
event Like(uint256 indexed postId, address user);
```

### Unlike

```solidity
event Unlike(uint256 indexed postId, address user);
```

## Errors
### PostDoesNotExist
*Error que se lanza cuando un post no existe.*


```solidity
error PostDoesNotExist(uint256);
```

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


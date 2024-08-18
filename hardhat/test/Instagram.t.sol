// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import {Test} from "forge-std/Test.sol";
import {Instagram} from "../contracts/Instagram.sol";

contract InstagramTest is Test {

    Instagram public instagram;

    event PostAdded(uint256 indexed postId, string description, address owner);
    event Like(uint256 indexed postId, address user);
    event Unlike(uint256 indexed postId, address user);

    function setUp() public {
        instagram = new Instagram();
    }

    function testFail_AddPost() public {
        Instagram.Post memory post = Instagram.Post({ description: "", uri: "" });        
        instagram.addPost(post);
    }

    function test_AddPost() public {
        Instagram.Post memory post = Instagram.Post("Description", "Uri");        

        vm.expectEmit(true, false, false, false);
        emit PostAdded(instagram.s_postCounterId()+1, "Description", address(this));
        instagram.addPost(post);  

        assertEq(1, instagram.s_postCounterId());     
        Instagram.Post memory retrievedPost = instagram.getPost(1);
        assertEq(retrievedPost.description, "Description");
        assertEq(retrievedPost.uri, "Uri"); 
    }

    function test_LikePost() external {
        uint256 _postId = 1;
        _addPost();

        vm.expectEmit(true, false, false, true);
        emit Like(_postId, address(this));
        instagram.like(_postId);
        uint256 likes = instagram.getLikesOfPost(1);
        assertEq(likes, 1);
    }

    function test_UnlikePost() public {
        Instagram.Post memory post = Instagram.Post("Description", "uri");
        instagram.addPost(post);
        instagram.like(1);
        instagram.unlike(1);
        uint256 likes = instagram.getLikesOfPost(1);
        assertEq(likes, 0);
    }

    function test_UnlikePostV2() external {                  
        _addPost();    
        instagram.like(1);  
        instagram.unlike(1);
    }

    function test_GetPost() external {
        uint256 postId = 1;
        vm.expectRevert();
        instagram.getPost(postId);
        _addPost();
        instagram.getPost(postId);
    }

    function test_GetPostUser() external {
        uint256 tokenId = 1;        
        vm.expectRevert();
        instagram.getPostUser(address(this), tokenId);
        _addPost();
        instagram.getPostUser(address(this), tokenId);
    }

    function test_GetAmountOfLikes() external {
        uint256 postId = 1;
        vm.expectRevert();
        instagram.getLikesOfPost(postId);
        _addPost();
        instagram.getLikesOfPost(postId);
    }

    function test_GetAllPosts() public {
        vm.expectRevert();
        instagram.getAllPosts(0, 2);

        Instagram.Post memory post1 = Instagram.Post("Description1", "uri1");
        Instagram.Post memory post2 = Instagram.Post("Description2", "uri2");
        instagram.addPost(post1);
        instagram.addPost(post2);
        vm.expectRevert();
        instagram.getAllPosts(1, 3);
        Instagram.Post[] memory posts = instagram.getAllPosts(1, 2);
        assertEq(posts.length, 2);
        assertEq(posts[0].description, "Description1");
        assertEq(posts[1].description, "Description2");

    }

    function test_GetUri() external {
        uint256 postId = 1;
        vm.expectRevert();
        instagram.getUri(postId);
        _addPost();
        instagram.getUri(postId);
    }

    function test_GetPostUserByUser() external {        
        instagram.getPostsCounterByUser(address(this));
        uint256 amountOfPosts = instagram.getPostsCounterByUser(address(this));
        assertEq(0, amountOfPosts);
        _addPost();
        amountOfPosts = instagram.getPostsCounterByUser(address(this));
        assertEq(1, amountOfPosts);
    }

    function test_TotalPost() external {        
        vm.assertEq(0, instagram.s_postCounterId());
        _addPost();
        vm.assertEq(1, instagram.s_postCounterId());
    }

    function _addPost() internal {
        Instagram.Post memory post = Instagram.Post({ description: "description", uri: "ipfs://" });
        instagram.addPost(post);
    }    
}
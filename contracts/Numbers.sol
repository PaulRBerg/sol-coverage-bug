pragma solidity >=0.5.1 <0.6.0;

contract Numbers {

    uint256 public foo;

    function setFoo(uint256 _foo) public {
        foo = _foo;
    }
}
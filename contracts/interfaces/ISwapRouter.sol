// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

interface ISwapRouter {
    error PairDoesNotExist();
    error InsufficientInputAmount();
    error IdenticalAddresses();
    error ZeroAddress();
    error InsufficientLiquidity();

}
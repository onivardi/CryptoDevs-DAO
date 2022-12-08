// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.17;

/**
 * @author  .
 * @title   .
 * @dev     .
 * @notice  .
 */

contract Whitelist {

    address public owner;
    
    uint8 public maxWhitelistedAddresses;
    uint8 public numAddressesWhitelisted;

    mapping (address => bool) public whitelistedAddress;

    constructor(uint8 _maxWhitelistedAddresses) {
        owner = msg.sender;
        maxWhitelistedAddresses = _maxWhitelistedAddresses;
    }
    event AddAddress(address _address, uint when);

    /**
     * @notice  .
     * @dev     .
     */
    function addAddressToWhitelist() external {
        require(!whitelistedAddress[msg.sender], "Sender has already been whitelisted");
        require(numAddressesWhitelisted < maxWhitelistedAddresses, "More addresses cant be added, limit reached");

        whitelistedAddress[msg.sender] = true;
        
        emit AddAddress(msg.sender, block.timestamp);

        numAddressesWhitelisted += 1;

    }

}


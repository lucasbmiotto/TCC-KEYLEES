// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Stampfy {
    struct Credential {
        string hash;
        string credType;
        string ownerDID;
        string issuerDID;
        uint256 timestamp;
        address issuer;
    }

    Credential[] public credentials;

    event CredentialRegistered(
        string hash,
        string credType,
        string ownerDID,
        string issuerDID,
        uint256 timestamp,
        address issuer
    );

    function registerCredential(
        string memory _hash,
        string memory _credType,
        string memory _ownerDID,
        string memory _issuerDID
    ) public {
        Credential memory newCredential = Credential({
            hash: _hash,
            credType: _credType,
            ownerDID: _ownerDID,
            issuerDID: _issuerDID,
            timestamp: block.timestamp,
            issuer: msg.sender
        });

        credentials.push(newCredential);

        emit CredentialRegistered(
            _hash,
            _credType,
            _ownerDID,
            _issuerDID,
            block.timestamp,
            msg.sender
        );
    }

    function getAllCredentials() public view returns (Credential[] memory) {
        return credentials;
    }
}

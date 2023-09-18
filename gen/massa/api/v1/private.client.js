"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateServiceClient = void 0;
const private_1 = require("./private");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * Massa private gRPC service
 *
 * @generated from protobuf service massa.api.v1.PrivateService
 */
class PrivateServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = private_1.PrivateService.typeName;
        this.methods = private_1.PrivateService.methods;
        this.options = private_1.PrivateService.options;
    }
    /**
     * Add IP addresses to node bootstrap blacklist
     *
     * @generated from protobuf rpc: AddToBootstrapBlacklist(massa.api.v1.AddToBootstrapBlacklistRequest) returns (massa.api.v1.AddToBootstrapBlacklistResponse);
     */
    addToBootstrapBlacklist(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Add IP addresses to node bootstrap whitelist
     *
     * @generated from protobuf rpc: AddToBootstrapWhitelist(massa.api.v1.AddToBootstrapWhitelistRequest) returns (massa.api.v1.AddToBootstrapWhitelistResponse);
     */
    addToBootstrapWhitelist(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Add IP addresses to node peers whitelist. No confirmation to expect.
     * Note: If the ip was unknown it adds it to the known peers, otherwise it updates the peer type
     *
     * @generated from protobuf rpc: AddToPeersWhitelist(massa.api.v1.AddToPeersWhitelistRequest) returns (massa.api.v1.AddToPeersWhitelistResponse);
     */
    addToPeersWhitelist(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Add staking secret keys to wallet
     *
     * @generated from protobuf rpc: AddStakingSecretKeys(massa.api.v1.AddStakingSecretKeysRequest) returns (massa.api.v1.AddStakingSecretKeysResponse);
     */
    addStakingSecretKeys(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Allow everyone to bootstrap from the node by removing bootstrap whitelist configuration file
     *
     * @generated from protobuf rpc: AllowEveryoneToBootstrap(massa.api.v1.AllowEveryoneToBootstrapRequest) returns (massa.api.v1.AllowEveryoneToBootstrapResponse);
     */
    allowEveryoneToBootstrap(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get node bootstrap blacklist IP addresses
     *
     * @generated from protobuf rpc: GetBootstrapBlacklist(massa.api.v1.GetBootstrapBlacklistRequest) returns (massa.api.v1.GetBootstrapBlacklistResponse);
     */
    getBootstrapBlacklist(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get node bootstrap whitelist IP addresses
     *
     * @generated from protobuf rpc: GetBootstrapWhitelist(massa.api.v1.GetBootstrapWhitelistRequest) returns (massa.api.v1.GetBootstrapWhitelistResponse);
     */
    getBootstrapWhitelist(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get Mip status
     *
     * @generated from protobuf rpc: GetMipStatus(massa.api.v1.GetMipStatusRequest) returns (massa.api.v1.GetMipStatusResponse);
     */
    getMipStatus(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get node status
     *
     * @generated from protobuf rpc: GetNodeStatus(massa.api.v1.GetNodeStatusRequest) returns (massa.api.v1.GetNodeStatusResponse);
     */
    getNodeStatus(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get node peers whitelist IP addresses
     *
     * @generated from protobuf rpc: GetPeersWhitelist(massa.api.v1.GetPeersWhitelistRequest) returns (massa.api.v1.GetPeersWhitelistResponse);
     */
    getPeersWhitelist(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Ban multiple nodes by their individual ids
     *
     * @generated from protobuf rpc: BanNodesByIds(massa.api.v1.BanNodesByIdsRequest) returns (massa.api.v1.BanNodesByIdsResponse);
     */
    banNodesByIds(input, options) {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Ban multiple nodes by their individual IP addresses
     *
     * @generated from protobuf rpc: BanNodesByIps(massa.api.v1.BanNodesByIpsRequest) returns (massa.api.v1.BanNodesByIpsResponse);
     */
    banNodesByIps(input, options) {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Remove from bootstrap blacklist given IP addresses
     *
     * @generated from protobuf rpc: RemoveFromBootstrapBlacklist(massa.api.v1.RemoveFromBootstrapBlacklistRequest) returns (massa.api.v1.RemoveFromBootstrapBlacklistResponse);
     */
    removeFromBootstrapBlacklist(input, options) {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Remove from bootstrap whitelist given IP addresses
     *
     * @generated from protobuf rpc: RemoveFromBootstrapWhitelist(massa.api.v1.RemoveFromBootstrapWhitelistRequest) returns (massa.api.v1.RemoveFromBootstrapWhitelistResponse);
     */
    removeFromBootstrapWhitelist(input, options) {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Remove from peers whitelist given IP addresses
     *
     * @generated from protobuf rpc: RemoveFromPeersWhitelist(massa.api.v1.RemoveFromPeersWhitelistRequest) returns (massa.api.v1.RemoveFromPeersWhitelistResponse);
     */
    removeFromPeersWhitelist(input, options) {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Remove addresses from staking
     *
     * @generated from protobuf rpc: RemoveStakingAddresses(massa.api.v1.RemoveStakingAddressesRequest) returns (massa.api.v1.RemoveStakingAddressesResponse);
     */
    removeStakingAddresses(input, options) {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Sign messages with node's key
     *
     * @generated from protobuf rpc: SignMessages(massa.api.v1.SignMessagesRequest) returns (massa.api.v1.SignMessagesResponse);
     */
    signMessages(input, options) {
        const method = this.methods[16], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Shutdown the node gracefully
     *
     * @generated from protobuf rpc: ShutdownGracefully(massa.api.v1.ShutdownGracefullyRequest) returns (massa.api.v1.ShutdownGracefullyResponse);
     */
    shutdownGracefully(input, options) {
        const method = this.methods[17], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Unban multiple nodes by their individual ids
     *
     * @generated from protobuf rpc: UnbanNodesByIds(massa.api.v1.UnbanNodesByIdsRequest) returns (massa.api.v1.UnbanNodesByIdsResponse);
     */
    unbanNodesByIds(input, options) {
        const method = this.methods[18], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Unban multiple nodes by their individual IP addresses
     *
     * @generated from protobuf rpc: UnbanNodesByIps(massa.api.v1.UnbanNodesByIpsRequest) returns (massa.api.v1.UnbanNodesByIpsResponse);
     */
    unbanNodesByIps(input, options) {
        const method = this.methods[19], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
}
exports.PrivateServiceClient = PrivateServiceClient;

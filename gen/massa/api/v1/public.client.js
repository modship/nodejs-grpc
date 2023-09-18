"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicServiceClient = void 0;
const public_1 = require("./public");
const runtime_rpc_1 = require("@protobuf-ts/runtime-rpc");
/**
 * Massa public gRPC service
 *
 * @generated from protobuf service massa.api.v1.PublicService
 */
class PublicServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = public_1.PublicService.typeName;
        this.methods = public_1.PublicService.methods;
        this.options = public_1.PublicService.options;
    }
    /**
     * Execute read only call
     *
     * @generated from protobuf rpc: ExecuteReadOnlyCall(massa.api.v1.ExecuteReadOnlyCallRequest) returns (massa.api.v1.ExecuteReadOnlyCallResponse);
     */
    executeReadOnlyCall(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get blocks by ids
     *
     * @generated from protobuf rpc: GetBlocks(massa.api.v1.GetBlocksRequest) returns (massa.api.v1.GetBlocksResponse);
     */
    getBlocks(input, options) {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get datastore entries
     *
     * @generated from protobuf rpc: GetDatastoreEntries(massa.api.v1.GetDatastoreEntriesRequest) returns (massa.api.v1.GetDatastoreEntriesResponse);
     */
    getDatastoreEntries(input, options) {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get endorsements by ids
     *
     * @generated from protobuf rpc: GetEndorsements(massa.api.v1.GetEndorsementsRequest) returns (massa.api.v1.GetEndorsementsResponse);
     */
    getEndorsements(input, options) {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get next block best parents
     *
     * @generated from protobuf rpc: GetNextBlockBestParents(massa.api.v1.GetNextBlockBestParentsRequest) returns (massa.api.v1.GetNextBlockBestParentsResponse);
     */
    getNextBlockBestParents(input, options) {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get operations by ids
     *
     * @generated from protobuf rpc: GetOperations(massa.api.v1.GetOperationsRequest) returns (massa.api.v1.GetOperationsResponse);
     */
    getOperations(input, options) {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get smart contracts execution events
     *
     * @generated from protobuf rpc: GetScExecutionEvents(massa.api.v1.GetScExecutionEventsRequest) returns (massa.api.v1.GetScExecutionEventsResponse);
     */
    getScExecutionEvents(input, options) {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get selector draws
     *
     * @generated from protobuf rpc: GetSelectorDraws(massa.api.v1.GetSelectorDrawsRequest) returns (massa.api.v1.GetSelectorDrawsResponse);
     */
    getSelectorDraws(input, options) {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get stakers
     *
     * @generated from protobuf rpc: GetStakers(massa.api.v1.GetStakersRequest) returns (massa.api.v1.GetStakersResponse);
     */
    getStakers(input, options) {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get status
     *
     * @generated from protobuf rpc: GetStatus(massa.api.v1.GetStatusRequest) returns (massa.api.v1.GetStatusResponse);
     */
    getStatus(input, options) {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Get transactions throughput
     *
     * @generated from protobuf rpc: GetTransactionsThroughput(massa.api.v1.GetTransactionsThroughputRequest) returns (massa.api.v1.GetTransactionsThroughputResponse);
     */
    getTransactionsThroughput(input, options) {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Query state
     *
     * @generated from protobuf rpc: QueryState(massa.api.v1.QueryStateRequest) returns (massa.api.v1.QueryStateResponse);
     */
    queryState(input, options) {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Search blocks
     *
     * @generated from protobuf rpc: SearchBlocks(massa.api.v1.SearchBlocksRequest) returns (massa.api.v1.SearchBlocksResponse);
     */
    searchBlocks(input, options) {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Search endorsements
     *
     * @generated from protobuf rpc: SearchEndorsements(massa.api.v1.SearchEndorsementsRequest) returns (massa.api.v1.SearchEndorsementsResponse);
     */
    searchEndorsements(input, options) {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    /**
     * Search operations
     *
     * @generated from protobuf rpc: SearchOperations(massa.api.v1.SearchOperationsRequest) returns (massa.api.v1.SearchOperationsResponse);
     */
    searchOperations(input, options) {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("unary", this._transport, method, opt, input);
    }
    // ███████╗████████╗██████╗ ███████╗ █████╗ ███╗   ███╗
    // ██╔════╝╚══██╔══╝██╔══██╗██╔════╝██╔══██╗████╗ ████║
    // ███████╗   ██║   ██████╔╝█████╗  ███████║██╔████╔██║
    // ╚════██║   ██║   ██╔══██╗██╔══╝  ██╔══██║██║╚██╔╝██║
    // ███████║   ██║   ██║  ██║███████╗██║  ██║██║ ╚═╝ ██║
    /**
     * New received and produced blocks
     *
     * @generated from protobuf rpc: NewBlocks(stream massa.api.v1.NewBlocksRequest) returns (stream massa.api.v1.NewBlocksResponse);
     */
    newBlocks(options) {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     * New received and produced endorsements
     *
     * @generated from protobuf rpc: NewEndorsements(stream massa.api.v1.NewEndorsementsRequest) returns (stream massa.api.v1.NewEndorsementsResponse);
     */
    newEndorsements(options) {
        const method = this.methods[16], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     * New received and produced blocks with operations
     *
     * @generated from protobuf rpc: NewFilledBlocks(stream massa.api.v1.NewFilledBlocksRequest) returns (stream massa.api.v1.NewFilledBlocksResponse);
     */
    newFilledBlocks(options) {
        const method = this.methods[17], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     * New received and produced operations
     *
     * @generated from protobuf rpc: NewOperations(stream massa.api.v1.NewOperationsRequest) returns (stream massa.api.v1.NewOperationsResponse);
     */
    newOperations(options) {
        const method = this.methods[18], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     * New received and slot execution events
     *
     * @generated from protobuf rpc: NewSlotExecutionOutputs(stream massa.api.v1.NewSlotExecutionOutputsRequest) returns (stream massa.api.v1.NewSlotExecutionOutputsResponse);
     */
    newSlotExecutionOutputs(options) {
        const method = this.methods[19], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     * Send blocks
     *
     * @generated from protobuf rpc: SendBlocks(stream massa.api.v1.SendBlocksRequest) returns (stream massa.api.v1.SendBlocksResponse);
     */
    sendBlocks(options) {
        const method = this.methods[20], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     * Send endorsements
     *
     * @generated from protobuf rpc: SendEndorsements(stream massa.api.v1.SendEndorsementsRequest) returns (stream massa.api.v1.SendEndorsementsResponse);
     */
    sendEndorsements(options) {
        const method = this.methods[21], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     * Send operations
     *
     * @generated from protobuf rpc: SendOperations(stream massa.api.v1.SendOperationsRequest) returns (stream massa.api.v1.SendOperationsResponse);
     */
    sendOperations(options) {
        const method = this.methods[22], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
    /**
     * Transactions throughput
     *
     * @generated from protobuf rpc: TransactionsThroughput(stream massa.api.v1.TransactionsThroughputRequest) returns (stream massa.api.v1.TransactionsThroughputResponse);
     */
    transactionsThroughput(options) {
        const method = this.methods[23], opt = this._transport.mergeOptions(options);
        return (0, runtime_rpc_1.stackIntercept)("duplex", this._transport, method, opt);
    }
}
exports.PublicServiceClient = PublicServiceClient;

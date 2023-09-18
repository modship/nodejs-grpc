"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutionStats = exports.NetworkStats = exports.PoolStats = exports.ConsensusStats = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const time_1 = require("./time");
// @generated message type with reflection information, may provide speed optimized methods
class ConsensusStats$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ConsensusStats", [
            { no: 1, name: "start_timespan", kind: "message", T: () => time_1.NativeTime },
            { no: 2, name: "end_timespan", kind: "message", T: () => time_1.NativeTime },
            { no: 3, name: "final_block_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "stale_block_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "clique_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { finalBlockCount: 0n, staleBlockCount: 0n, cliqueCount: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* massa.model.v1.NativeTime start_timespan */ 1:
                    message.startTimespan = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.startTimespan);
                    break;
                case /* massa.model.v1.NativeTime end_timespan */ 2:
                    message.endTimespan = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.endTimespan);
                    break;
                case /* uint64 final_block_count */ 3:
                    message.finalBlockCount = reader.uint64().toBigInt();
                    break;
                case /* uint64 stale_block_count */ 4:
                    message.staleBlockCount = reader.uint64().toBigInt();
                    break;
                case /* uint64 clique_count */ 5:
                    message.cliqueCount = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* massa.model.v1.NativeTime start_timespan = 1; */
        if (message.startTimespan)
            time_1.NativeTime.internalBinaryWrite(message.startTimespan, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime end_timespan = 2; */
        if (message.endTimespan)
            time_1.NativeTime.internalBinaryWrite(message.endTimespan, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 final_block_count = 3; */
        if (message.finalBlockCount !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.finalBlockCount);
        /* uint64 stale_block_count = 4; */
        if (message.staleBlockCount !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.staleBlockCount);
        /* uint64 clique_count = 5; */
        if (message.cliqueCount !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.cliqueCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ConsensusStats
 */
exports.ConsensusStats = new ConsensusStats$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PoolStats$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.PoolStats", [
            { no: 1, name: "endorsements_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "operations_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { endorsementsCount: 0n, operationsCount: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 endorsements_count */ 1:
                    message.endorsementsCount = reader.uint64().toBigInt();
                    break;
                case /* uint64 operations_count */ 2:
                    message.operationsCount = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint64 endorsements_count = 1; */
        if (message.endorsementsCount !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.endorsementsCount);
        /* uint64 operations_count = 2; */
        if (message.operationsCount !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.operationsCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.PoolStats
 */
exports.PoolStats = new PoolStats$Type();
// @generated message type with reflection information, may provide speed optimized methods
class NetworkStats$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.NetworkStats", [
            { no: 1, name: "in_connection_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "out_connection_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "known_peer_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "banned_peer_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "active_node_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { inConnectionCount: 0n, outConnectionCount: 0n, knownPeerCount: 0n, bannedPeerCount: 0n, activeNodeCount: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint64 in_connection_count */ 1:
                    message.inConnectionCount = reader.uint64().toBigInt();
                    break;
                case /* uint64 out_connection_count */ 2:
                    message.outConnectionCount = reader.uint64().toBigInt();
                    break;
                case /* uint64 known_peer_count */ 3:
                    message.knownPeerCount = reader.uint64().toBigInt();
                    break;
                case /* uint64 banned_peer_count */ 4:
                    message.bannedPeerCount = reader.uint64().toBigInt();
                    break;
                case /* uint64 active_node_count */ 5:
                    message.activeNodeCount = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* uint64 in_connection_count = 1; */
        if (message.inConnectionCount !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.inConnectionCount);
        /* uint64 out_connection_count = 2; */
        if (message.outConnectionCount !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.outConnectionCount);
        /* uint64 known_peer_count = 3; */
        if (message.knownPeerCount !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.knownPeerCount);
        /* uint64 banned_peer_count = 4; */
        if (message.bannedPeerCount !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.bannedPeerCount);
        /* uint64 active_node_count = 5; */
        if (message.activeNodeCount !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.activeNodeCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.NetworkStats
 */
exports.NetworkStats = new NetworkStats$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecutionStats$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ExecutionStats", [
            { no: 1, name: "time_window_start", kind: "message", T: () => time_1.NativeTime },
            { no: 2, name: "time_window_end", kind: "message", T: () => time_1.NativeTime },
            { no: 3, name: "final_block_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "final_executed_operations_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { finalBlockCount: 0n, finalExecutedOperationsCount: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* massa.model.v1.NativeTime time_window_start */ 1:
                    message.timeWindowStart = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.timeWindowStart);
                    break;
                case /* massa.model.v1.NativeTime time_window_end */ 2:
                    message.timeWindowEnd = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.timeWindowEnd);
                    break;
                case /* uint64 final_block_count */ 3:
                    message.finalBlockCount = reader.uint64().toBigInt();
                    break;
                case /* uint64 final_executed_operations_count */ 4:
                    message.finalExecutedOperationsCount = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message, writer, options) {
        /* massa.model.v1.NativeTime time_window_start = 1; */
        if (message.timeWindowStart)
            time_1.NativeTime.internalBinaryWrite(message.timeWindowStart, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime time_window_end = 2; */
        if (message.timeWindowEnd)
            time_1.NativeTime.internalBinaryWrite(message.timeWindowEnd, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 final_block_count = 3; */
        if (message.finalBlockCount !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.finalBlockCount);
        /* uint64 final_executed_operations_count = 4; */
        if (message.finalExecutedOperationsCount !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.finalExecutedOperationsCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ExecutionStats
 */
exports.ExecutionStats = new ExecutionStats$Type();

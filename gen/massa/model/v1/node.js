"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicStatus = exports.CompactConfig = exports.ConnectedNode = exports.NodeStatus = exports.ConnectionType = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const amount_1 = require("./amount");
const stats_1 = require("./stats");
const stats_2 = require("./stats");
const stats_3 = require("./stats");
const stats_4 = require("./stats");
const slot_1 = require("./slot");
const time_1 = require("./time");
/**
 * ConnectionType enum
 *
 * @generated from protobuf enum massa.model.v1.ConnectionType
 */
var ConnectionType;
(function (ConnectionType) {
    /**
     * Default enum value
     *
     * @generated from protobuf enum value: CONNECTION_TYPE_UNSPECIFIED = 0;
     */
    ConnectionType[ConnectionType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Incoming connection
     *
     * @generated from protobuf enum value: CONNECTION_TYPE_INCOMING = 1;
     */
    ConnectionType[ConnectionType["INCOMING"] = 1] = "INCOMING";
    /**
     * Outgoing connection
     *
     * @generated from protobuf enum value: CONNECTION_TYPE_OUTGOING = 2;
     */
    ConnectionType[ConnectionType["OUTGOING"] = 2] = "OUTGOING";
})(ConnectionType || (exports.ConnectionType = ConnectionType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class NodeStatus$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.NodeStatus", [
            { no: 1, name: "node_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "node_ip", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "current_time", kind: "message", T: () => time_1.NativeTime },
            { no: 5, name: "current_cycle", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "current_cycle_time", kind: "message", T: () => time_1.NativeTime },
            { no: 7, name: "next_cycle_time", kind: "message", T: () => time_1.NativeTime },
            { no: 8, name: "connected_nodes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ConnectedNode },
            { no: 9, name: "last_executed_final_slot", kind: "message", T: () => slot_1.Slot },
            { no: 10, name: "last_executed_speculative_slot", kind: "message", T: () => slot_1.Slot },
            { no: 11, name: "final_state_fingerprint", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 12, name: "consensus_stats", kind: "message", T: () => stats_4.ConsensusStats },
            { no: 13, name: "pool_stats", kind: "message", T: () => stats_3.PoolStats },
            { no: 14, name: "network_stats", kind: "message", T: () => stats_2.NetworkStats },
            { no: 15, name: "execution_stats", kind: "message", T: () => stats_1.ExecutionStats },
            { no: 16, name: "config", kind: "message", T: () => exports.CompactConfig }
        ]);
    }
    create(value) {
        const message = { nodeId: "", nodeIp: "", version: "", currentCycle: 0n, connectedNodes: [], finalStateFingerprint: "" };
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
                case /* string node_id */ 1:
                    message.nodeId = reader.string();
                    break;
                case /* string node_ip */ 2:
                    message.nodeIp = reader.string();
                    break;
                case /* string version */ 3:
                    message.version = reader.string();
                    break;
                case /* massa.model.v1.NativeTime current_time */ 4:
                    message.currentTime = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.currentTime);
                    break;
                case /* uint64 current_cycle */ 5:
                    message.currentCycle = reader.uint64().toBigInt();
                    break;
                case /* massa.model.v1.NativeTime current_cycle_time */ 6:
                    message.currentCycleTime = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.currentCycleTime);
                    break;
                case /* massa.model.v1.NativeTime next_cycle_time */ 7:
                    message.nextCycleTime = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.nextCycleTime);
                    break;
                case /* repeated massa.model.v1.ConnectedNode connected_nodes */ 8:
                    message.connectedNodes.push(exports.ConnectedNode.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* massa.model.v1.Slot last_executed_final_slot */ 9:
                    message.lastExecutedFinalSlot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.lastExecutedFinalSlot);
                    break;
                case /* massa.model.v1.Slot last_executed_speculative_slot */ 10:
                    message.lastExecutedSpeculativeSlot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.lastExecutedSpeculativeSlot);
                    break;
                case /* string final_state_fingerprint */ 11:
                    message.finalStateFingerprint = reader.string();
                    break;
                case /* massa.model.v1.ConsensusStats consensus_stats */ 12:
                    message.consensusStats = stats_4.ConsensusStats.internalBinaryRead(reader, reader.uint32(), options, message.consensusStats);
                    break;
                case /* massa.model.v1.PoolStats pool_stats */ 13:
                    message.poolStats = stats_3.PoolStats.internalBinaryRead(reader, reader.uint32(), options, message.poolStats);
                    break;
                case /* massa.model.v1.NetworkStats network_stats */ 14:
                    message.networkStats = stats_2.NetworkStats.internalBinaryRead(reader, reader.uint32(), options, message.networkStats);
                    break;
                case /* massa.model.v1.ExecutionStats execution_stats */ 15:
                    message.executionStats = stats_1.ExecutionStats.internalBinaryRead(reader, reader.uint32(), options, message.executionStats);
                    break;
                case /* massa.model.v1.CompactConfig config */ 16:
                    message.config = exports.CompactConfig.internalBinaryRead(reader, reader.uint32(), options, message.config);
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
        /* string node_id = 1; */
        if (message.nodeId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.nodeId);
        /* string node_ip = 2; */
        if (message.nodeIp !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.nodeIp);
        /* string version = 3; */
        if (message.version !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.version);
        /* massa.model.v1.NativeTime current_time = 4; */
        if (message.currentTime)
            time_1.NativeTime.internalBinaryWrite(message.currentTime, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 current_cycle = 5; */
        if (message.currentCycle !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.currentCycle);
        /* massa.model.v1.NativeTime current_cycle_time = 6; */
        if (message.currentCycleTime)
            time_1.NativeTime.internalBinaryWrite(message.currentCycleTime, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime next_cycle_time = 7; */
        if (message.nextCycleTime)
            time_1.NativeTime.internalBinaryWrite(message.nextCycleTime, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated massa.model.v1.ConnectedNode connected_nodes = 8; */
        for (let i = 0; i < message.connectedNodes.length; i++)
            exports.ConnectedNode.internalBinaryWrite(message.connectedNodes[i], writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Slot last_executed_final_slot = 9; */
        if (message.lastExecutedFinalSlot)
            slot_1.Slot.internalBinaryWrite(message.lastExecutedFinalSlot, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Slot last_executed_speculative_slot = 10; */
        if (message.lastExecutedSpeculativeSlot)
            slot_1.Slot.internalBinaryWrite(message.lastExecutedSpeculativeSlot, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string final_state_fingerprint = 11; */
        if (message.finalStateFingerprint !== "")
            writer.tag(11, runtime_1.WireType.LengthDelimited).string(message.finalStateFingerprint);
        /* massa.model.v1.ConsensusStats consensus_stats = 12; */
        if (message.consensusStats)
            stats_4.ConsensusStats.internalBinaryWrite(message.consensusStats, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.PoolStats pool_stats = 13; */
        if (message.poolStats)
            stats_3.PoolStats.internalBinaryWrite(message.poolStats, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NetworkStats network_stats = 14; */
        if (message.networkStats)
            stats_2.NetworkStats.internalBinaryWrite(message.networkStats, writer.tag(14, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.ExecutionStats execution_stats = 15; */
        if (message.executionStats)
            stats_1.ExecutionStats.internalBinaryWrite(message.executionStats, writer.tag(15, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.CompactConfig config = 16; */
        if (message.config)
            exports.CompactConfig.internalBinaryWrite(message.config, writer.tag(16, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.NodeStatus
 */
exports.NodeStatus = new NodeStatus$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ConnectedNode$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ConnectedNode", [
            { no: 1, name: "node_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "node_ip", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "connection_type", kind: "enum", T: () => ["massa.model.v1.ConnectionType", ConnectionType, "CONNECTION_TYPE_"] }
        ]);
    }
    create(value) {
        const message = { nodeId: "", nodeIp: "", connectionType: 0 };
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
                case /* string node_id */ 1:
                    message.nodeId = reader.string();
                    break;
                case /* string node_ip */ 2:
                    message.nodeIp = reader.string();
                    break;
                case /* massa.model.v1.ConnectionType connection_type */ 3:
                    message.connectionType = reader.int32();
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
        /* string node_id = 1; */
        if (message.nodeId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.nodeId);
        /* string node_ip = 2; */
        if (message.nodeIp !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.nodeIp);
        /* massa.model.v1.ConnectionType connection_type = 3; */
        if (message.connectionType !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.connectionType);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ConnectedNode
 */
exports.ConnectedNode = new ConnectedNode$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CompactConfig$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.CompactConfig", [
            { no: 1, name: "genesis_timestamp", kind: "message", T: () => time_1.NativeTime },
            { no: 2, name: "end_timestamp", kind: "message", T: () => time_1.NativeTime },
            { no: 3, name: "thread_count", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "t0", kind: "message", T: () => time_1.NativeTime },
            { no: 5, name: "delta_f0", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "operation_validity_periods", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "periods_per_cycle", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "block_reward", kind: "message", T: () => amount_1.NativeAmount },
            { no: 9, name: "roll_price", kind: "message", T: () => amount_1.NativeAmount },
            { no: 10, name: "max_block_size", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { threadCount: 0, deltaF0: 0n, operationValidityPeriods: 0n, periodsPerCycle: 0n, maxBlockSize: 0 };
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
                case /* massa.model.v1.NativeTime genesis_timestamp */ 1:
                    message.genesisTimestamp = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.genesisTimestamp);
                    break;
                case /* massa.model.v1.NativeTime end_timestamp */ 2:
                    message.endTimestamp = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.endTimestamp);
                    break;
                case /* uint32 thread_count */ 3:
                    message.threadCount = reader.uint32();
                    break;
                case /* massa.model.v1.NativeTime t0 */ 4:
                    message.t0 = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.t0);
                    break;
                case /* uint64 delta_f0 */ 5:
                    message.deltaF0 = reader.uint64().toBigInt();
                    break;
                case /* uint64 operation_validity_periods */ 6:
                    message.operationValidityPeriods = reader.uint64().toBigInt();
                    break;
                case /* uint64 periods_per_cycle */ 7:
                    message.periodsPerCycle = reader.uint64().toBigInt();
                    break;
                case /* massa.model.v1.NativeAmount block_reward */ 8:
                    message.blockReward = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.blockReward);
                    break;
                case /* massa.model.v1.NativeAmount roll_price */ 9:
                    message.rollPrice = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.rollPrice);
                    break;
                case /* uint32 max_block_size */ 10:
                    message.maxBlockSize = reader.uint32();
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
        /* massa.model.v1.NativeTime genesis_timestamp = 1; */
        if (message.genesisTimestamp)
            time_1.NativeTime.internalBinaryWrite(message.genesisTimestamp, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime end_timestamp = 2; */
        if (message.endTimestamp)
            time_1.NativeTime.internalBinaryWrite(message.endTimestamp, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 thread_count = 3; */
        if (message.threadCount !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.threadCount);
        /* massa.model.v1.NativeTime t0 = 4; */
        if (message.t0)
            time_1.NativeTime.internalBinaryWrite(message.t0, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 delta_f0 = 5; */
        if (message.deltaF0 !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.deltaF0);
        /* uint64 operation_validity_periods = 6; */
        if (message.operationValidityPeriods !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.operationValidityPeriods);
        /* uint64 periods_per_cycle = 7; */
        if (message.periodsPerCycle !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.periodsPerCycle);
        /* massa.model.v1.NativeAmount block_reward = 8; */
        if (message.blockReward)
            amount_1.NativeAmount.internalBinaryWrite(message.blockReward, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeAmount roll_price = 9; */
        if (message.rollPrice)
            amount_1.NativeAmount.internalBinaryWrite(message.rollPrice, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 max_block_size = 10; */
        if (message.maxBlockSize !== 0)
            writer.tag(10, runtime_1.WireType.Varint).uint32(message.maxBlockSize);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.CompactConfig
 */
exports.CompactConfig = new CompactConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class PublicStatus$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.PublicStatus", [
            { no: 1, name: "node_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "version", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "current_time", kind: "message", T: () => time_1.NativeTime },
            { no: 5, name: "current_cycle", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "current_cycle_time", kind: "message", T: () => time_1.NativeTime },
            { no: 7, name: "next_cycle_time", kind: "message", T: () => time_1.NativeTime },
            { no: 8, name: "last_executed_final_slot", kind: "message", T: () => slot_1.Slot },
            { no: 9, name: "last_executed_speculative_slot", kind: "message", T: () => slot_1.Slot },
            { no: 10, name: "final_state_fingerprint", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 11, name: "config", kind: "message", T: () => exports.CompactConfig }
        ]);
    }
    create(value) {
        const message = { nodeId: "", version: "", currentCycle: 0n, finalStateFingerprint: "" };
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
                case /* string node_id */ 1:
                    message.nodeId = reader.string();
                    break;
                case /* string version */ 3:
                    message.version = reader.string();
                    break;
                case /* massa.model.v1.NativeTime current_time */ 4:
                    message.currentTime = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.currentTime);
                    break;
                case /* uint64 current_cycle */ 5:
                    message.currentCycle = reader.uint64().toBigInt();
                    break;
                case /* massa.model.v1.NativeTime current_cycle_time */ 6:
                    message.currentCycleTime = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.currentCycleTime);
                    break;
                case /* massa.model.v1.NativeTime next_cycle_time */ 7:
                    message.nextCycleTime = time_1.NativeTime.internalBinaryRead(reader, reader.uint32(), options, message.nextCycleTime);
                    break;
                case /* massa.model.v1.Slot last_executed_final_slot */ 8:
                    message.lastExecutedFinalSlot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.lastExecutedFinalSlot);
                    break;
                case /* massa.model.v1.Slot last_executed_speculative_slot */ 9:
                    message.lastExecutedSpeculativeSlot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.lastExecutedSpeculativeSlot);
                    break;
                case /* string final_state_fingerprint */ 10:
                    message.finalStateFingerprint = reader.string();
                    break;
                case /* massa.model.v1.CompactConfig config */ 11:
                    message.config = exports.CompactConfig.internalBinaryRead(reader, reader.uint32(), options, message.config);
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
        /* string node_id = 1; */
        if (message.nodeId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.nodeId);
        /* string version = 3; */
        if (message.version !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.version);
        /* massa.model.v1.NativeTime current_time = 4; */
        if (message.currentTime)
            time_1.NativeTime.internalBinaryWrite(message.currentTime, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 current_cycle = 5; */
        if (message.currentCycle !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.currentCycle);
        /* massa.model.v1.NativeTime current_cycle_time = 6; */
        if (message.currentCycleTime)
            time_1.NativeTime.internalBinaryWrite(message.currentCycleTime, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeTime next_cycle_time = 7; */
        if (message.nextCycleTime)
            time_1.NativeTime.internalBinaryWrite(message.nextCycleTime, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Slot last_executed_final_slot = 8; */
        if (message.lastExecutedFinalSlot)
            slot_1.Slot.internalBinaryWrite(message.lastExecutedFinalSlot, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Slot last_executed_speculative_slot = 9; */
        if (message.lastExecutedSpeculativeSlot)
            slot_1.Slot.internalBinaryWrite(message.lastExecutedSpeculativeSlot, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string final_state_fingerprint = 10; */
        if (message.finalStateFingerprint !== "")
            writer.tag(10, runtime_1.WireType.LengthDelimited).string(message.finalStateFingerprint);
        /* massa.model.v1.CompactConfig config = 11; */
        if (message.config)
            exports.CompactConfig.internalBinaryWrite(message.config, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.PublicStatus
 */
exports.PublicStatus = new PublicStatus$Type();

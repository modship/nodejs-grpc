"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExecutionStackElement = exports.ReadOnlyExecutionOutput = exports.FunctionCall = exports.BytecodeExecution = exports.ReadOnlyExecutionCall = exports.SetOrDeleteDatastoreEntry = exports.SetOrKeepBalance = exports.LedgerEntryUpdate = exports.LedgerEntry = exports.LedgerChangeValue = exports.LedgerChangeEntry = exports.AsyncMessageTrigger = exports.SetOrKeepAsyncMessageTrigger = exports.SetOrKeepBool = exports.SetOrKeepBytes = exports.SetOrKeepString = exports.SetOrKeepUint64 = exports.SetOrKeepSlot = exports.AsyncMessageUpdate = exports.AsyncMessage = exports.AsyncPoolChangeValue = exports.AsyncPoolChangeEntry = exports.ExecutedOpsChangeValue = exports.ExecutedOpsChangeEntry = exports.StateChanges = exports.ScExecutionEventsStatus = exports.ScExecutionEventContext = exports.ScExecutionEvent = exports.ExecutionOutput = exports.FinalizedExecutionOutput = exports.SlotExecutionOutput = exports.LedgerChangeType = exports.AsyncPoolChangeType = exports.OperationExecutionStatus = exports.ExecutionOutputStatus = exports.ScExecutionEventStatus = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const commons_1 = require("./commons");
const wrappers_1 = require("../../../google/protobuf/wrappers");
const wrappers_2 = require("../../../google/protobuf/wrappers");
const wrappers_3 = require("../../../google/protobuf/wrappers");
const commons_2 = require("./commons");
const amount_1 = require("./amount");
const denunciation_1 = require("./denunciation");
const wrappers_4 = require("../../../google/protobuf/wrappers");
const slot_1 = require("./slot");
/**
 * ScExecutionEventStatus type enum
 *
 * @generated from protobuf enum massa.model.v1.ScExecutionEventStatus
 */
var ScExecutionEventStatus;
(function (ScExecutionEventStatus) {
    /**
     * Default enum value
     *
     * @generated from protobuf enum value: SC_EXECUTION_EVENT_STATUS_UNSPECIFIED = 0;
     */
    ScExecutionEventStatus[ScExecutionEventStatus["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Final status
     *
     * @generated from protobuf enum value: SC_EXECUTION_EVENT_STATUS_FINAL = 1;
     */
    ScExecutionEventStatus[ScExecutionEventStatus["FINAL"] = 1] = "FINAL";
    /**
     * Read only status
     *
     * @generated from protobuf enum value: SC_EXECUTION_EVENT_STATUS_READ_ONLY = 2;
     */
    ScExecutionEventStatus[ScExecutionEventStatus["READ_ONLY"] = 2] = "READ_ONLY";
    /**
     * Candidate status
     *
     * @generated from protobuf enum value: SC_EXECUTION_EVENT_STATUS_CANDIDATE = 3;
     */
    ScExecutionEventStatus[ScExecutionEventStatus["CANDIDATE"] = 3] = "CANDIDATE";
})(ScExecutionEventStatus || (exports.ScExecutionEventStatus = ScExecutionEventStatus = {}));
/**
 * ExecutionOutputStatus type enum
 *
 * @generated from protobuf enum massa.model.v1.ExecutionOutputStatus
 */
var ExecutionOutputStatus;
(function (ExecutionOutputStatus) {
    /**
     * Default enum value
     *
     * @generated from protobuf enum value: EXECUTION_OUTPUT_STATUS_UNSPECIFIED = 0;
     */
    ExecutionOutputStatus[ExecutionOutputStatus["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Candidate status
     *
     * @generated from protobuf enum value: EXECUTION_OUTPUT_STATUS_CANDIDATE = 1;
     */
    ExecutionOutputStatus[ExecutionOutputStatus["CANDIDATE"] = 1] = "CANDIDATE";
    /**
     * Final status
     *
     * @generated from protobuf enum value: EXECUTION_OUTPUT_STATUS_FINAL = 2;
     */
    ExecutionOutputStatus[ExecutionOutputStatus["FINAL"] = 2] = "FINAL";
    /**
     * Unknown status
     *
     * @generated from protobuf enum value: EXECUTION_OUTPUT_STATUS_UNKNOWN = 3;
     */
    ExecutionOutputStatus[ExecutionOutputStatus["UNKNOWN"] = 3] = "UNKNOWN";
})(ExecutionOutputStatus || (exports.ExecutionOutputStatus = ExecutionOutputStatus = {}));
/**
 * OperationExecutionStatus type enum
 *
 * @generated from protobuf enum massa.model.v1.OperationExecutionStatus
 */
var OperationExecutionStatus;
(function (OperationExecutionStatus) {
    /**
     * Default enum value
     *
     * @generated from protobuf enum value: OPERATION_EXECUTION_STATUS_UNSPECIFIED = 0;
     */
    OperationExecutionStatus[OperationExecutionStatus["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Success status
     *
     * @generated from protobuf enum value: OPERATION_EXECUTION_STATUS_SUCCESS = 1;
     */
    OperationExecutionStatus[OperationExecutionStatus["SUCCESS"] = 1] = "SUCCESS";
    /**
     * Failed only status
     *
     * @generated from protobuf enum value: OPERATION_EXECUTION_STATUS_FAILED = 2;
     */
    OperationExecutionStatus[OperationExecutionStatus["FAILED"] = 2] = "FAILED";
})(OperationExecutionStatus || (exports.OperationExecutionStatus = OperationExecutionStatus = {}));
/**
 * AsyncPoolChangeType type enum
 *
 * @generated from protobuf enum massa.model.v1.AsyncPoolChangeType
 */
var AsyncPoolChangeType;
(function (AsyncPoolChangeType) {
    /**
     * Default enum value
     *
     * @generated from protobuf enum value: ASYNC_POOL_CHANGE_TYPE_UNSPECIFIED = 0;
     */
    AsyncPoolChangeType[AsyncPoolChangeType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Set type
     *
     * @generated from protobuf enum value: ASYNC_POOL_CHANGE_TYPE_SET = 1;
     */
    AsyncPoolChangeType[AsyncPoolChangeType["SET"] = 1] = "SET";
    /**
     * Activate only type
     *
     * @generated from protobuf enum value: ASYNC_POOL_CHANGE_TYPE_UPDATE = 2;
     */
    AsyncPoolChangeType[AsyncPoolChangeType["UPDATE"] = 2] = "UPDATE";
    /**
     * Delete only type
     *
     * @generated from protobuf enum value: ASYNC_POOL_CHANGE_TYPE_DELETE = 3;
     */
    AsyncPoolChangeType[AsyncPoolChangeType["DELETE"] = 3] = "DELETE";
})(AsyncPoolChangeType || (exports.AsyncPoolChangeType = AsyncPoolChangeType = {}));
/**
 * LedgerChangeType type enum
 *
 * @generated from protobuf enum massa.model.v1.LedgerChangeType
 */
var LedgerChangeType;
(function (LedgerChangeType) {
    /**
     * Default enum value
     *
     * @generated from protobuf enum value: LEDGER_CHANGE_TYPE_UNSPECIFIED = 0;
     */
    LedgerChangeType[LedgerChangeType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * Set type
     *
     * @generated from protobuf enum value: LEDGER_CHANGE_TYPE_SET = 1;
     */
    LedgerChangeType[LedgerChangeType["SET"] = 1] = "SET";
    /**
     * Update type
     *
     * @generated from protobuf enum value: LEDGER_CHANGE_TYPE_UPDATE = 2;
     */
    LedgerChangeType[LedgerChangeType["UPDATE"] = 2] = "UPDATE";
    /**
     * Delete type
     *
     * @generated from protobuf enum value: LEDGER_CHANGE_TYPE_DELETE = 3;
     */
    LedgerChangeType[LedgerChangeType["DELETE"] = 3] = "DELETE";
})(LedgerChangeType || (exports.LedgerChangeType = LedgerChangeType = {}));
// @generated message type with reflection information, may provide speed optimized methods
class SlotExecutionOutput$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SlotExecutionOutput", [
            { no: 1, name: "status", kind: "enum", T: () => ["massa.model.v1.ExecutionOutputStatus", ExecutionOutputStatus, "EXECUTION_OUTPUT_STATUS_"] },
            { no: 2, name: "execution_output", kind: "message", T: () => exports.ExecutionOutput }
        ]);
    }
    create(value) {
        const message = { status: 0 };
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
                case /* massa.model.v1.ExecutionOutputStatus status */ 1:
                    message.status = reader.int32();
                    break;
                case /* massa.model.v1.ExecutionOutput execution_output */ 2:
                    message.executionOutput = exports.ExecutionOutput.internalBinaryRead(reader, reader.uint32(), options, message.executionOutput);
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
        /* massa.model.v1.ExecutionOutputStatus status = 1; */
        if (message.status !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.status);
        /* massa.model.v1.ExecutionOutput execution_output = 2; */
        if (message.executionOutput)
            exports.ExecutionOutput.internalBinaryWrite(message.executionOutput, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SlotExecutionOutput
 */
exports.SlotExecutionOutput = new SlotExecutionOutput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FinalizedExecutionOutput$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.FinalizedExecutionOutput", [
            { no: 1, name: "slot", kind: "message", T: () => slot_1.Slot }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.Slot slot */ 1:
                    message.slot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.slot);
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
        /* massa.model.v1.Slot slot = 1; */
        if (message.slot)
            slot_1.Slot.internalBinaryWrite(message.slot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.FinalizedExecutionOutput
 */
exports.FinalizedExecutionOutput = new FinalizedExecutionOutput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecutionOutput$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ExecutionOutput", [
            { no: 1, name: "slot", kind: "message", T: () => slot_1.Slot },
            { no: 2, name: "block_id", kind: "message", T: () => wrappers_4.StringValue },
            { no: 3, name: "events", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ScExecutionEvent },
            { no: 4, name: "state_changes", kind: "message", T: () => exports.StateChanges }
        ]);
    }
    create(value) {
        const message = { events: [] };
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
                case /* massa.model.v1.Slot slot */ 1:
                    message.slot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.slot);
                    break;
                case /* google.protobuf.StringValue block_id */ 2:
                    message.blockId = wrappers_4.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.blockId);
                    break;
                case /* repeated massa.model.v1.ScExecutionEvent events */ 3:
                    message.events.push(exports.ScExecutionEvent.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* massa.model.v1.StateChanges state_changes */ 4:
                    message.stateChanges = exports.StateChanges.internalBinaryRead(reader, reader.uint32(), options, message.stateChanges);
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
        /* massa.model.v1.Slot slot = 1; */
        if (message.slot)
            slot_1.Slot.internalBinaryWrite(message.slot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.StringValue block_id = 2; */
        if (message.blockId)
            wrappers_4.StringValue.internalBinaryWrite(message.blockId, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated massa.model.v1.ScExecutionEvent events = 3; */
        for (let i = 0; i < message.events.length; i++)
            exports.ScExecutionEvent.internalBinaryWrite(message.events[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.StateChanges state_changes = 4; */
        if (message.stateChanges)
            exports.StateChanges.internalBinaryWrite(message.stateChanges, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ExecutionOutput
 */
exports.ExecutionOutput = new ExecutionOutput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScExecutionEvent$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ScExecutionEvent", [
            { no: 1, name: "context", kind: "message", T: () => exports.ScExecutionEventContext },
            { no: 2, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { data: new Uint8Array(0) };
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
                case /* massa.model.v1.ScExecutionEventContext context */ 1:
                    message.context = exports.ScExecutionEventContext.internalBinaryRead(reader, reader.uint32(), options, message.context);
                    break;
                case /* bytes data */ 2:
                    message.data = reader.bytes();
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
        /* massa.model.v1.ScExecutionEventContext context = 1; */
        if (message.context)
            exports.ScExecutionEventContext.internalBinaryWrite(message.context, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bytes data = 2; */
        if (message.data.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.data);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ScExecutionEvent
 */
exports.ScExecutionEvent = new ScExecutionEvent$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScExecutionEventContext$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ScExecutionEventContext", [
            { no: 1, name: "origin_slot", kind: "message", T: () => slot_1.Slot },
            { no: 2, name: "block_id", kind: "message", T: () => wrappers_4.StringValue },
            { no: 3, name: "index_in_slot", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "call_stack", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "origin_operation_id", kind: "message", T: () => wrappers_4.StringValue },
            { no: 6, name: "is_failure", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "status", kind: "enum", T: () => ["massa.model.v1.ScExecutionEventStatus", ScExecutionEventStatus, "SC_EXECUTION_EVENT_STATUS_"] }
        ]);
    }
    create(value) {
        const message = { indexInSlot: 0n, callStack: [], isFailure: false, status: 0 };
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
                case /* massa.model.v1.Slot origin_slot */ 1:
                    message.originSlot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.originSlot);
                    break;
                case /* google.protobuf.StringValue block_id */ 2:
                    message.blockId = wrappers_4.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.blockId);
                    break;
                case /* uint64 index_in_slot */ 3:
                    message.indexInSlot = reader.uint64().toBigInt();
                    break;
                case /* repeated string call_stack */ 4:
                    message.callStack.push(reader.string());
                    break;
                case /* google.protobuf.StringValue origin_operation_id */ 5:
                    message.originOperationId = wrappers_4.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.originOperationId);
                    break;
                case /* bool is_failure */ 6:
                    message.isFailure = reader.bool();
                    break;
                case /* massa.model.v1.ScExecutionEventStatus status */ 7:
                    message.status = reader.int32();
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
        /* massa.model.v1.Slot origin_slot = 1; */
        if (message.originSlot)
            slot_1.Slot.internalBinaryWrite(message.originSlot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.StringValue block_id = 2; */
        if (message.blockId)
            wrappers_4.StringValue.internalBinaryWrite(message.blockId, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 index_in_slot = 3; */
        if (message.indexInSlot !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.indexInSlot);
        /* repeated string call_stack = 4; */
        for (let i = 0; i < message.callStack.length; i++)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.callStack[i]);
        /* google.protobuf.StringValue origin_operation_id = 5; */
        if (message.originOperationId)
            wrappers_4.StringValue.internalBinaryWrite(message.originOperationId, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_failure = 6; */
        if (message.isFailure !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isFailure);
        /* massa.model.v1.ScExecutionEventStatus status = 7; */
        if (message.status !== 0)
            writer.tag(7, runtime_1.WireType.Varint).int32(message.status);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ScExecutionEventContext
 */
exports.ScExecutionEventContext = new ScExecutionEventContext$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ScExecutionEventsStatus$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ScExecutionEventsStatus", [
            { no: 1, name: "status", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["massa.model.v1.ScExecutionEventStatus", ScExecutionEventStatus, "SC_EXECUTION_EVENT_STATUS_"] }
        ]);
    }
    create(value) {
        const message = { status: [] };
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
                case /* repeated massa.model.v1.ScExecutionEventStatus status */ 1:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.status.push(reader.int32());
                    else
                        message.status.push(reader.int32());
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
        /* repeated massa.model.v1.ScExecutionEventStatus status = 1; */
        if (message.status.length) {
            writer.tag(1, runtime_1.WireType.LengthDelimited).fork();
            for (let i = 0; i < message.status.length; i++)
                writer.int32(message.status[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ScExecutionEventsStatus
 */
exports.ScExecutionEventsStatus = new ScExecutionEventsStatus$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StateChanges$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.StateChanges", [
            { no: 1, name: "ledger_changes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.LedgerChangeEntry },
            { no: 2, name: "async_pool_changes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.AsyncPoolChangeEntry },
            { no: 4, name: "executed_ops_changes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ExecutedOpsChangeEntry },
            { no: 5, name: "executed_denunciations_changes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => denunciation_1.DenunciationIndex },
            { no: 6, name: "execution_trail_hash_change", kind: "message", T: () => exports.SetOrKeepString }
        ]);
    }
    create(value) {
        const message = { ledgerChanges: [], asyncPoolChanges: [], executedOpsChanges: [], executedDenunciationsChanges: [] };
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
                case /* repeated massa.model.v1.LedgerChangeEntry ledger_changes */ 1:
                    message.ledgerChanges.push(exports.LedgerChangeEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated massa.model.v1.AsyncPoolChangeEntry async_pool_changes */ 2:
                    message.asyncPoolChanges.push(exports.AsyncPoolChangeEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated massa.model.v1.ExecutedOpsChangeEntry executed_ops_changes */ 4:
                    message.executedOpsChanges.push(exports.ExecutedOpsChangeEntry.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated massa.model.v1.DenunciationIndex executed_denunciations_changes */ 5:
                    message.executedDenunciationsChanges.push(denunciation_1.DenunciationIndex.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* massa.model.v1.SetOrKeepString execution_trail_hash_change */ 6:
                    message.executionTrailHashChange = exports.SetOrKeepString.internalBinaryRead(reader, reader.uint32(), options, message.executionTrailHashChange);
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
        /* repeated massa.model.v1.LedgerChangeEntry ledger_changes = 1; */
        for (let i = 0; i < message.ledgerChanges.length; i++)
            exports.LedgerChangeEntry.internalBinaryWrite(message.ledgerChanges[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated massa.model.v1.AsyncPoolChangeEntry async_pool_changes = 2; */
        for (let i = 0; i < message.asyncPoolChanges.length; i++)
            exports.AsyncPoolChangeEntry.internalBinaryWrite(message.asyncPoolChanges[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated massa.model.v1.ExecutedOpsChangeEntry executed_ops_changes = 4; */
        for (let i = 0; i < message.executedOpsChanges.length; i++)
            exports.ExecutedOpsChangeEntry.internalBinaryWrite(message.executedOpsChanges[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated massa.model.v1.DenunciationIndex executed_denunciations_changes = 5; */
        for (let i = 0; i < message.executedDenunciationsChanges.length; i++)
            denunciation_1.DenunciationIndex.internalBinaryWrite(message.executedDenunciationsChanges[i], writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepString execution_trail_hash_change = 6; */
        if (message.executionTrailHashChange)
            exports.SetOrKeepString.internalBinaryWrite(message.executionTrailHashChange, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.StateChanges
 */
exports.StateChanges = new StateChanges$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecutedOpsChangeEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ExecutedOpsChangeEntry", [
            { no: 1, name: "operation_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "message", T: () => exports.ExecutedOpsChangeValue }
        ]);
    }
    create(value) {
        const message = { operationId: "" };
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
                case /* string operation_id */ 1:
                    message.operationId = reader.string();
                    break;
                case /* massa.model.v1.ExecutedOpsChangeValue value */ 2:
                    message.value = exports.ExecutedOpsChangeValue.internalBinaryRead(reader, reader.uint32(), options, message.value);
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
        /* string operation_id = 1; */
        if (message.operationId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.operationId);
        /* massa.model.v1.ExecutedOpsChangeValue value = 2; */
        if (message.value)
            exports.ExecutedOpsChangeValue.internalBinaryWrite(message.value, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ExecutedOpsChangeEntry
 */
exports.ExecutedOpsChangeEntry = new ExecutedOpsChangeEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecutedOpsChangeValue$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ExecutedOpsChangeValue", [
            { no: 1, name: "status", kind: "enum", T: () => ["massa.model.v1.OperationExecutionStatus", OperationExecutionStatus, "OPERATION_EXECUTION_STATUS_"] },
            { no: 2, name: "slot", kind: "message", T: () => slot_1.Slot }
        ]);
    }
    create(value) {
        const message = { status: 0 };
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
                case /* massa.model.v1.OperationExecutionStatus status */ 1:
                    message.status = reader.int32();
                    break;
                case /* massa.model.v1.Slot slot */ 2:
                    message.slot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.slot);
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
        /* massa.model.v1.OperationExecutionStatus status = 1; */
        if (message.status !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.status);
        /* massa.model.v1.Slot slot = 2; */
        if (message.slot)
            slot_1.Slot.internalBinaryWrite(message.slot, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ExecutedOpsChangeValue
 */
exports.ExecutedOpsChangeValue = new ExecutedOpsChangeValue$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AsyncPoolChangeEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.AsyncPoolChangeEntry", [
            { no: 1, name: "async_message_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "message", T: () => exports.AsyncPoolChangeValue }
        ]);
    }
    create(value) {
        const message = { asyncMessageId: "" };
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
                case /* string async_message_id */ 1:
                    message.asyncMessageId = reader.string();
                    break;
                case /* massa.model.v1.AsyncPoolChangeValue value */ 2:
                    message.value = exports.AsyncPoolChangeValue.internalBinaryRead(reader, reader.uint32(), options, message.value);
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
        /* string async_message_id = 1; */
        if (message.asyncMessageId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.asyncMessageId);
        /* massa.model.v1.AsyncPoolChangeValue value = 2; */
        if (message.value)
            exports.AsyncPoolChangeValue.internalBinaryWrite(message.value, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.AsyncPoolChangeEntry
 */
exports.AsyncPoolChangeEntry = new AsyncPoolChangeEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AsyncPoolChangeValue$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.AsyncPoolChangeValue", [
            { no: 1, name: "type", kind: "enum", T: () => ["massa.model.v1.AsyncPoolChangeType", AsyncPoolChangeType, "ASYNC_POOL_CHANGE_TYPE_"] },
            { no: 2, name: "created_message", kind: "message", oneof: "message", T: () => exports.AsyncMessage },
            { no: 3, name: "updated_message", kind: "message", oneof: "message", T: () => exports.AsyncMessageUpdate }
        ]);
    }
    create(value) {
        const message = { type: 0, message: { oneofKind: undefined } };
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
                case /* massa.model.v1.AsyncPoolChangeType type */ 1:
                    message.type = reader.int32();
                    break;
                case /* massa.model.v1.AsyncMessage created_message */ 2:
                    message.message = {
                        oneofKind: "createdMessage",
                        createdMessage: exports.AsyncMessage.internalBinaryRead(reader, reader.uint32(), options, message.message.createdMessage)
                    };
                    break;
                case /* massa.model.v1.AsyncMessageUpdate updated_message */ 3:
                    message.message = {
                        oneofKind: "updatedMessage",
                        updatedMessage: exports.AsyncMessageUpdate.internalBinaryRead(reader, reader.uint32(), options, message.message.updatedMessage)
                    };
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
        /* massa.model.v1.AsyncPoolChangeType type = 1; */
        if (message.type !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.type);
        /* massa.model.v1.AsyncMessage created_message = 2; */
        if (message.message.oneofKind === "createdMessage")
            exports.AsyncMessage.internalBinaryWrite(message.message.createdMessage, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.AsyncMessageUpdate updated_message = 3; */
        if (message.message.oneofKind === "updatedMessage")
            exports.AsyncMessageUpdate.internalBinaryWrite(message.message.updatedMessage, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.AsyncPoolChangeValue
 */
exports.AsyncPoolChangeValue = new AsyncPoolChangeValue$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AsyncMessage$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.AsyncMessage", [
            { no: 1, name: "emission_slot", kind: "message", T: () => slot_1.Slot },
            { no: 2, name: "emission_index", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "sender", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "destination", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "handler", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "max_gas", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "fee", kind: "message", T: () => amount_1.NativeAmount },
            { no: 8, name: "coins", kind: "message", T: () => amount_1.NativeAmount },
            { no: 9, name: "validity_start", kind: "message", T: () => slot_1.Slot },
            { no: 10, name: "validity_end", kind: "message", T: () => slot_1.Slot },
            { no: 11, name: "data", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 12, name: "trigger", kind: "message", T: () => exports.AsyncMessageTrigger },
            { no: 13, name: "can_be_executed", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { emissionIndex: 0n, sender: "", destination: "", handler: "", maxGas: 0n, data: new Uint8Array(0), canBeExecuted: false };
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
                case /* massa.model.v1.Slot emission_slot */ 1:
                    message.emissionSlot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.emissionSlot);
                    break;
                case /* uint64 emission_index */ 2:
                    message.emissionIndex = reader.uint64().toBigInt();
                    break;
                case /* string sender */ 3:
                    message.sender = reader.string();
                    break;
                case /* string destination */ 4:
                    message.destination = reader.string();
                    break;
                case /* string handler */ 5:
                    message.handler = reader.string();
                    break;
                case /* uint64 max_gas */ 6:
                    message.maxGas = reader.uint64().toBigInt();
                    break;
                case /* massa.model.v1.NativeAmount fee */ 7:
                    message.fee = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.fee);
                    break;
                case /* massa.model.v1.NativeAmount coins */ 8:
                    message.coins = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.coins);
                    break;
                case /* massa.model.v1.Slot validity_start */ 9:
                    message.validityStart = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.validityStart);
                    break;
                case /* massa.model.v1.Slot validity_end */ 10:
                    message.validityEnd = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.validityEnd);
                    break;
                case /* bytes data */ 11:
                    message.data = reader.bytes();
                    break;
                case /* massa.model.v1.AsyncMessageTrigger trigger */ 12:
                    message.trigger = exports.AsyncMessageTrigger.internalBinaryRead(reader, reader.uint32(), options, message.trigger);
                    break;
                case /* bool can_be_executed */ 13:
                    message.canBeExecuted = reader.bool();
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
        /* massa.model.v1.Slot emission_slot = 1; */
        if (message.emissionSlot)
            slot_1.Slot.internalBinaryWrite(message.emissionSlot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 emission_index = 2; */
        if (message.emissionIndex !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.emissionIndex);
        /* string sender = 3; */
        if (message.sender !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.sender);
        /* string destination = 4; */
        if (message.destination !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.destination);
        /* string handler = 5; */
        if (message.handler !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.handler);
        /* uint64 max_gas = 6; */
        if (message.maxGas !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.maxGas);
        /* massa.model.v1.NativeAmount fee = 7; */
        if (message.fee)
            amount_1.NativeAmount.internalBinaryWrite(message.fee, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.NativeAmount coins = 8; */
        if (message.coins)
            amount_1.NativeAmount.internalBinaryWrite(message.coins, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Slot validity_start = 9; */
        if (message.validityStart)
            slot_1.Slot.internalBinaryWrite(message.validityStart, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Slot validity_end = 10; */
        if (message.validityEnd)
            slot_1.Slot.internalBinaryWrite(message.validityEnd, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bytes data = 11; */
        if (message.data.length)
            writer.tag(11, runtime_1.WireType.LengthDelimited).bytes(message.data);
        /* massa.model.v1.AsyncMessageTrigger trigger = 12; */
        if (message.trigger)
            exports.AsyncMessageTrigger.internalBinaryWrite(message.trigger, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool can_be_executed = 13; */
        if (message.canBeExecuted !== false)
            writer.tag(13, runtime_1.WireType.Varint).bool(message.canBeExecuted);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.AsyncMessage
 */
exports.AsyncMessage = new AsyncMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AsyncMessageUpdate$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.AsyncMessageUpdate", [
            { no: 1, name: "emission_slot", kind: "message", T: () => exports.SetOrKeepSlot },
            { no: 2, name: "emission_index", kind: "message", T: () => exports.SetOrKeepUint64 },
            { no: 3, name: "sender", kind: "message", T: () => exports.SetOrKeepString },
            { no: 4, name: "destination", kind: "message", T: () => exports.SetOrKeepString },
            { no: 5, name: "handler", kind: "message", T: () => exports.SetOrKeepString },
            { no: 6, name: "max_gas", kind: "message", T: () => exports.SetOrKeepUint64 },
            { no: 7, name: "fee", kind: "message", T: () => exports.SetOrKeepUint64 },
            { no: 8, name: "coins", kind: "message", T: () => exports.SetOrKeepUint64 },
            { no: 9, name: "validity_start", kind: "message", T: () => exports.SetOrKeepSlot },
            { no: 10, name: "validity_end", kind: "message", T: () => exports.SetOrKeepSlot },
            { no: 11, name: "data", kind: "message", T: () => exports.SetOrKeepBytes },
            { no: 12, name: "trigger", kind: "message", T: () => exports.SetOrKeepAsyncMessageTrigger },
            { no: 13, name: "can_be_executed", kind: "message", T: () => exports.SetOrKeepBool }
        ]);
    }
    create(value) {
        const message = {};
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
                case /* massa.model.v1.SetOrKeepSlot emission_slot */ 1:
                    message.emissionSlot = exports.SetOrKeepSlot.internalBinaryRead(reader, reader.uint32(), options, message.emissionSlot);
                    break;
                case /* massa.model.v1.SetOrKeepUint64 emission_index */ 2:
                    message.emissionIndex = exports.SetOrKeepUint64.internalBinaryRead(reader, reader.uint32(), options, message.emissionIndex);
                    break;
                case /* massa.model.v1.SetOrKeepString sender */ 3:
                    message.sender = exports.SetOrKeepString.internalBinaryRead(reader, reader.uint32(), options, message.sender);
                    break;
                case /* massa.model.v1.SetOrKeepString destination */ 4:
                    message.destination = exports.SetOrKeepString.internalBinaryRead(reader, reader.uint32(), options, message.destination);
                    break;
                case /* massa.model.v1.SetOrKeepString handler */ 5:
                    message.handler = exports.SetOrKeepString.internalBinaryRead(reader, reader.uint32(), options, message.handler);
                    break;
                case /* massa.model.v1.SetOrKeepUint64 max_gas */ 6:
                    message.maxGas = exports.SetOrKeepUint64.internalBinaryRead(reader, reader.uint32(), options, message.maxGas);
                    break;
                case /* massa.model.v1.SetOrKeepUint64 fee */ 7:
                    message.fee = exports.SetOrKeepUint64.internalBinaryRead(reader, reader.uint32(), options, message.fee);
                    break;
                case /* massa.model.v1.SetOrKeepUint64 coins */ 8:
                    message.coins = exports.SetOrKeepUint64.internalBinaryRead(reader, reader.uint32(), options, message.coins);
                    break;
                case /* massa.model.v1.SetOrKeepSlot validity_start */ 9:
                    message.validityStart = exports.SetOrKeepSlot.internalBinaryRead(reader, reader.uint32(), options, message.validityStart);
                    break;
                case /* massa.model.v1.SetOrKeepSlot validity_end */ 10:
                    message.validityEnd = exports.SetOrKeepSlot.internalBinaryRead(reader, reader.uint32(), options, message.validityEnd);
                    break;
                case /* massa.model.v1.SetOrKeepBytes data */ 11:
                    message.data = exports.SetOrKeepBytes.internalBinaryRead(reader, reader.uint32(), options, message.data);
                    break;
                case /* massa.model.v1.SetOrKeepAsyncMessageTrigger trigger */ 12:
                    message.trigger = exports.SetOrKeepAsyncMessageTrigger.internalBinaryRead(reader, reader.uint32(), options, message.trigger);
                    break;
                case /* massa.model.v1.SetOrKeepBool can_be_executed */ 13:
                    message.canBeExecuted = exports.SetOrKeepBool.internalBinaryRead(reader, reader.uint32(), options, message.canBeExecuted);
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
        /* massa.model.v1.SetOrKeepSlot emission_slot = 1; */
        if (message.emissionSlot)
            exports.SetOrKeepSlot.internalBinaryWrite(message.emissionSlot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepUint64 emission_index = 2; */
        if (message.emissionIndex)
            exports.SetOrKeepUint64.internalBinaryWrite(message.emissionIndex, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepString sender = 3; */
        if (message.sender)
            exports.SetOrKeepString.internalBinaryWrite(message.sender, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepString destination = 4; */
        if (message.destination)
            exports.SetOrKeepString.internalBinaryWrite(message.destination, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepString handler = 5; */
        if (message.handler)
            exports.SetOrKeepString.internalBinaryWrite(message.handler, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepUint64 max_gas = 6; */
        if (message.maxGas)
            exports.SetOrKeepUint64.internalBinaryWrite(message.maxGas, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepUint64 fee = 7; */
        if (message.fee)
            exports.SetOrKeepUint64.internalBinaryWrite(message.fee, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepUint64 coins = 8; */
        if (message.coins)
            exports.SetOrKeepUint64.internalBinaryWrite(message.coins, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepSlot validity_start = 9; */
        if (message.validityStart)
            exports.SetOrKeepSlot.internalBinaryWrite(message.validityStart, writer.tag(9, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepSlot validity_end = 10; */
        if (message.validityEnd)
            exports.SetOrKeepSlot.internalBinaryWrite(message.validityEnd, writer.tag(10, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepBytes data = 11; */
        if (message.data)
            exports.SetOrKeepBytes.internalBinaryWrite(message.data, writer.tag(11, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepAsyncMessageTrigger trigger = 12; */
        if (message.trigger)
            exports.SetOrKeepAsyncMessageTrigger.internalBinaryWrite(message.trigger, writer.tag(12, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepBool can_be_executed = 13; */
        if (message.canBeExecuted)
            exports.SetOrKeepBool.internalBinaryWrite(message.canBeExecuted, writer.tag(13, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.AsyncMessageUpdate
 */
exports.AsyncMessageUpdate = new AsyncMessageUpdate$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetOrKeepSlot$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SetOrKeepSlot", [
            { no: 1, name: "set", kind: "message", oneof: "change", T: () => slot_1.Slot },
            { no: 2, name: "keep", kind: "message", oneof: "change", T: () => commons_2.Empty }
        ]);
    }
    create(value) {
        const message = { change: { oneofKind: undefined } };
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
                case /* massa.model.v1.Slot set */ 1:
                    message.change = {
                        oneofKind: "set",
                        set: slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.change.set)
                    };
                    break;
                case /* massa.model.v1.Empty keep */ 2:
                    message.change = {
                        oneofKind: "keep",
                        keep: commons_2.Empty.internalBinaryRead(reader, reader.uint32(), options, message.change.keep)
                    };
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
        /* massa.model.v1.Slot set = 1; */
        if (message.change.oneofKind === "set")
            slot_1.Slot.internalBinaryWrite(message.change.set, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Empty keep = 2; */
        if (message.change.oneofKind === "keep")
            commons_2.Empty.internalBinaryWrite(message.change.keep, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SetOrKeepSlot
 */
exports.SetOrKeepSlot = new SetOrKeepSlot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetOrKeepUint64$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SetOrKeepUint64", [
            { no: 1, name: "set", kind: "message", oneof: "change", T: () => wrappers_3.UInt64Value },
            { no: 2, name: "keep", kind: "message", oneof: "change", T: () => commons_2.Empty }
        ]);
    }
    create(value) {
        const message = { change: { oneofKind: undefined } };
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
                case /* google.protobuf.UInt64Value set */ 1:
                    message.change = {
                        oneofKind: "set",
                        set: wrappers_3.UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.change.set)
                    };
                    break;
                case /* massa.model.v1.Empty keep */ 2:
                    message.change = {
                        oneofKind: "keep",
                        keep: commons_2.Empty.internalBinaryRead(reader, reader.uint32(), options, message.change.keep)
                    };
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
        /* google.protobuf.UInt64Value set = 1; */
        if (message.change.oneofKind === "set")
            wrappers_3.UInt64Value.internalBinaryWrite(message.change.set, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Empty keep = 2; */
        if (message.change.oneofKind === "keep")
            commons_2.Empty.internalBinaryWrite(message.change.keep, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SetOrKeepUint64
 */
exports.SetOrKeepUint64 = new SetOrKeepUint64$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetOrKeepString$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SetOrKeepString", [
            { no: 1, name: "set", kind: "message", oneof: "change", T: () => wrappers_4.StringValue },
            { no: 2, name: "keep", kind: "message", oneof: "change", T: () => commons_2.Empty }
        ]);
    }
    create(value) {
        const message = { change: { oneofKind: undefined } };
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
                case /* google.protobuf.StringValue set */ 1:
                    message.change = {
                        oneofKind: "set",
                        set: wrappers_4.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.change.set)
                    };
                    break;
                case /* massa.model.v1.Empty keep */ 2:
                    message.change = {
                        oneofKind: "keep",
                        keep: commons_2.Empty.internalBinaryRead(reader, reader.uint32(), options, message.change.keep)
                    };
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
        /* google.protobuf.StringValue set = 1; */
        if (message.change.oneofKind === "set")
            wrappers_4.StringValue.internalBinaryWrite(message.change.set, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Empty keep = 2; */
        if (message.change.oneofKind === "keep")
            commons_2.Empty.internalBinaryWrite(message.change.keep, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SetOrKeepString
 */
exports.SetOrKeepString = new SetOrKeepString$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetOrKeepBytes$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SetOrKeepBytes", [
            { no: 1, name: "set", kind: "message", oneof: "change", T: () => wrappers_2.BytesValue },
            { no: 2, name: "keep", kind: "message", oneof: "change", T: () => commons_2.Empty }
        ]);
    }
    create(value) {
        const message = { change: { oneofKind: undefined } };
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
                case /* google.protobuf.BytesValue set */ 1:
                    message.change = {
                        oneofKind: "set",
                        set: wrappers_2.BytesValue.internalBinaryRead(reader, reader.uint32(), options, message.change.set)
                    };
                    break;
                case /* massa.model.v1.Empty keep */ 2:
                    message.change = {
                        oneofKind: "keep",
                        keep: commons_2.Empty.internalBinaryRead(reader, reader.uint32(), options, message.change.keep)
                    };
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
        /* google.protobuf.BytesValue set = 1; */
        if (message.change.oneofKind === "set")
            wrappers_2.BytesValue.internalBinaryWrite(message.change.set, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Empty keep = 2; */
        if (message.change.oneofKind === "keep")
            commons_2.Empty.internalBinaryWrite(message.change.keep, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SetOrKeepBytes
 */
exports.SetOrKeepBytes = new SetOrKeepBytes$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetOrKeepBool$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SetOrKeepBool", [
            { no: 1, name: "set", kind: "message", oneof: "change", T: () => wrappers_1.BoolValue },
            { no: 2, name: "keep", kind: "message", oneof: "change", T: () => commons_2.Empty }
        ]);
    }
    create(value) {
        const message = { change: { oneofKind: undefined } };
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
                case /* google.protobuf.BoolValue set */ 1:
                    message.change = {
                        oneofKind: "set",
                        set: wrappers_1.BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.change.set)
                    };
                    break;
                case /* massa.model.v1.Empty keep */ 2:
                    message.change = {
                        oneofKind: "keep",
                        keep: commons_2.Empty.internalBinaryRead(reader, reader.uint32(), options, message.change.keep)
                    };
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
        /* google.protobuf.BoolValue set = 1; */
        if (message.change.oneofKind === "set")
            wrappers_1.BoolValue.internalBinaryWrite(message.change.set, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Empty keep = 2; */
        if (message.change.oneofKind === "keep")
            commons_2.Empty.internalBinaryWrite(message.change.keep, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SetOrKeepBool
 */
exports.SetOrKeepBool = new SetOrKeepBool$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetOrKeepAsyncMessageTrigger$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SetOrKeepAsyncMessageTrigger", [
            { no: 1, name: "set", kind: "message", oneof: "change", T: () => exports.AsyncMessageTrigger },
            { no: 2, name: "keep", kind: "message", oneof: "change", T: () => commons_2.Empty }
        ]);
    }
    create(value) {
        const message = { change: { oneofKind: undefined } };
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
                case /* massa.model.v1.AsyncMessageTrigger set */ 1:
                    message.change = {
                        oneofKind: "set",
                        set: exports.AsyncMessageTrigger.internalBinaryRead(reader, reader.uint32(), options, message.change.set)
                    };
                    break;
                case /* massa.model.v1.Empty keep */ 2:
                    message.change = {
                        oneofKind: "keep",
                        keep: commons_2.Empty.internalBinaryRead(reader, reader.uint32(), options, message.change.keep)
                    };
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
        /* massa.model.v1.AsyncMessageTrigger set = 1; */
        if (message.change.oneofKind === "set")
            exports.AsyncMessageTrigger.internalBinaryWrite(message.change.set, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Empty keep = 2; */
        if (message.change.oneofKind === "keep")
            commons_2.Empty.internalBinaryWrite(message.change.keep, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SetOrKeepAsyncMessageTrigger
 */
exports.SetOrKeepAsyncMessageTrigger = new SetOrKeepAsyncMessageTrigger$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AsyncMessageTrigger$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.AsyncMessageTrigger", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "datastore_key", kind: "message", T: () => wrappers_2.BytesValue }
        ]);
    }
    create(value) {
        const message = { address: "" };
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
                case /* string address */ 1:
                    message.address = reader.string();
                    break;
                case /* google.protobuf.BytesValue datastore_key */ 2:
                    message.datastoreKey = wrappers_2.BytesValue.internalBinaryRead(reader, reader.uint32(), options, message.datastoreKey);
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
        /* string address = 1; */
        if (message.address !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.address);
        /* google.protobuf.BytesValue datastore_key = 2; */
        if (message.datastoreKey)
            wrappers_2.BytesValue.internalBinaryWrite(message.datastoreKey, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.AsyncMessageTrigger
 */
exports.AsyncMessageTrigger = new AsyncMessageTrigger$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LedgerChangeEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.LedgerChangeEntry", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "value", kind: "message", T: () => exports.LedgerChangeValue }
        ]);
    }
    create(value) {
        const message = { address: "" };
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
                case /* string address */ 1:
                    message.address = reader.string();
                    break;
                case /* massa.model.v1.LedgerChangeValue value */ 2:
                    message.value = exports.LedgerChangeValue.internalBinaryRead(reader, reader.uint32(), options, message.value);
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
        /* string address = 1; */
        if (message.address !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.address);
        /* massa.model.v1.LedgerChangeValue value = 2; */
        if (message.value)
            exports.LedgerChangeValue.internalBinaryWrite(message.value, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.LedgerChangeEntry
 */
exports.LedgerChangeEntry = new LedgerChangeEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LedgerChangeValue$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.LedgerChangeValue", [
            { no: 1, name: "type", kind: "enum", T: () => ["massa.model.v1.LedgerChangeType", LedgerChangeType, "LEDGER_CHANGE_TYPE_"] },
            { no: 2, name: "created_entry", kind: "message", oneof: "entry", T: () => exports.LedgerEntry },
            { no: 3, name: "updated_entry", kind: "message", oneof: "entry", T: () => exports.LedgerEntryUpdate }
        ]);
    }
    create(value) {
        const message = { type: 0, entry: { oneofKind: undefined } };
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
                case /* massa.model.v1.LedgerChangeType type */ 1:
                    message.type = reader.int32();
                    break;
                case /* massa.model.v1.LedgerEntry created_entry */ 2:
                    message.entry = {
                        oneofKind: "createdEntry",
                        createdEntry: exports.LedgerEntry.internalBinaryRead(reader, reader.uint32(), options, message.entry.createdEntry)
                    };
                    break;
                case /* massa.model.v1.LedgerEntryUpdate updated_entry */ 3:
                    message.entry = {
                        oneofKind: "updatedEntry",
                        updatedEntry: exports.LedgerEntryUpdate.internalBinaryRead(reader, reader.uint32(), options, message.entry.updatedEntry)
                    };
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
        /* massa.model.v1.LedgerChangeType type = 1; */
        if (message.type !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.type);
        /* massa.model.v1.LedgerEntry created_entry = 2; */
        if (message.entry.oneofKind === "createdEntry")
            exports.LedgerEntry.internalBinaryWrite(message.entry.createdEntry, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.LedgerEntryUpdate updated_entry = 3; */
        if (message.entry.oneofKind === "updatedEntry")
            exports.LedgerEntryUpdate.internalBinaryWrite(message.entry.updatedEntry, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.LedgerChangeValue
 */
exports.LedgerChangeValue = new LedgerChangeValue$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LedgerEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.LedgerEntry", [
            { no: 1, name: "balance", kind: "message", T: () => amount_1.NativeAmount },
            { no: 2, name: "bytecode", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 3, name: "datastore", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => commons_1.BytesMapFieldEntry }
        ]);
    }
    create(value) {
        const message = { bytecode: new Uint8Array(0), datastore: [] };
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
                case /* massa.model.v1.NativeAmount balance */ 1:
                    message.balance = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.balance);
                    break;
                case /* bytes bytecode */ 2:
                    message.bytecode = reader.bytes();
                    break;
                case /* repeated massa.model.v1.BytesMapFieldEntry datastore */ 3:
                    message.datastore.push(commons_1.BytesMapFieldEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* massa.model.v1.NativeAmount balance = 1; */
        if (message.balance)
            amount_1.NativeAmount.internalBinaryWrite(message.balance, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bytes bytecode = 2; */
        if (message.bytecode.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.bytecode);
        /* repeated massa.model.v1.BytesMapFieldEntry datastore = 3; */
        for (let i = 0; i < message.datastore.length; i++)
            commons_1.BytesMapFieldEntry.internalBinaryWrite(message.datastore[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.LedgerEntry
 */
exports.LedgerEntry = new LedgerEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class LedgerEntryUpdate$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.LedgerEntryUpdate", [
            { no: 1, name: "balance", kind: "message", T: () => exports.SetOrKeepBalance },
            { no: 2, name: "bytecode", kind: "message", T: () => exports.SetOrKeepBytes },
            { no: 3, name: "datastore", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.SetOrDeleteDatastoreEntry }
        ]);
    }
    create(value) {
        const message = { datastore: [] };
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
                case /* massa.model.v1.SetOrKeepBalance balance */ 1:
                    message.balance = exports.SetOrKeepBalance.internalBinaryRead(reader, reader.uint32(), options, message.balance);
                    break;
                case /* massa.model.v1.SetOrKeepBytes bytecode */ 2:
                    message.bytecode = exports.SetOrKeepBytes.internalBinaryRead(reader, reader.uint32(), options, message.bytecode);
                    break;
                case /* repeated massa.model.v1.SetOrDeleteDatastoreEntry datastore */ 3:
                    message.datastore.push(exports.SetOrDeleteDatastoreEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* massa.model.v1.SetOrKeepBalance balance = 1; */
        if (message.balance)
            exports.SetOrKeepBalance.internalBinaryWrite(message.balance, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.SetOrKeepBytes bytecode = 2; */
        if (message.bytecode)
            exports.SetOrKeepBytes.internalBinaryWrite(message.bytecode, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated massa.model.v1.SetOrDeleteDatastoreEntry datastore = 3; */
        for (let i = 0; i < message.datastore.length; i++)
            exports.SetOrDeleteDatastoreEntry.internalBinaryWrite(message.datastore[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.LedgerEntryUpdate
 */
exports.LedgerEntryUpdate = new LedgerEntryUpdate$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetOrKeepBalance$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SetOrKeepBalance", [
            { no: 1, name: "set", kind: "message", oneof: "change", T: () => amount_1.NativeAmount },
            { no: 2, name: "keep", kind: "message", oneof: "change", T: () => commons_2.Empty }
        ]);
    }
    create(value) {
        const message = { change: { oneofKind: undefined } };
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
                case /* massa.model.v1.NativeAmount set */ 1:
                    message.change = {
                        oneofKind: "set",
                        set: amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.change.set)
                    };
                    break;
                case /* massa.model.v1.Empty keep */ 2:
                    message.change = {
                        oneofKind: "keep",
                        keep: commons_2.Empty.internalBinaryRead(reader, reader.uint32(), options, message.change.keep)
                    };
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
        /* massa.model.v1.NativeAmount set = 1; */
        if (message.change.oneofKind === "set")
            amount_1.NativeAmount.internalBinaryWrite(message.change.set, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Empty keep = 2; */
        if (message.change.oneofKind === "keep")
            commons_2.Empty.internalBinaryWrite(message.change.keep, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SetOrKeepBalance
 */
exports.SetOrKeepBalance = new SetOrKeepBalance$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SetOrDeleteDatastoreEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SetOrDeleteDatastoreEntry", [
            { no: 1, name: "set", kind: "message", oneof: "change", T: () => commons_1.BytesMapFieldEntry },
            { no: 2, name: "delete", kind: "message", oneof: "change", T: () => commons_2.Empty }
        ]);
    }
    create(value) {
        const message = { change: { oneofKind: undefined } };
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
                case /* massa.model.v1.BytesMapFieldEntry set */ 1:
                    message.change = {
                        oneofKind: "set",
                        set: commons_1.BytesMapFieldEntry.internalBinaryRead(reader, reader.uint32(), options, message.change.set)
                    };
                    break;
                case /* massa.model.v1.Empty delete */ 2:
                    message.change = {
                        oneofKind: "delete",
                        delete: commons_2.Empty.internalBinaryRead(reader, reader.uint32(), options, message.change.delete)
                    };
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
        /* massa.model.v1.BytesMapFieldEntry set = 1; */
        if (message.change.oneofKind === "set")
            commons_1.BytesMapFieldEntry.internalBinaryWrite(message.change.set, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Empty delete = 2; */
        if (message.change.oneofKind === "delete")
            commons_2.Empty.internalBinaryWrite(message.change.delete, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SetOrDeleteDatastoreEntry
 */
exports.SetOrDeleteDatastoreEntry = new SetOrDeleteDatastoreEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadOnlyExecutionCall$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ReadOnlyExecutionCall", [
            { no: 1, name: "max_gas", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "call_stack", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.ExecutionStackElement },
            { no: 3, name: "bytecode_call", kind: "message", oneof: "target", T: () => exports.BytecodeExecution },
            { no: 4, name: "function_call", kind: "message", oneof: "target", T: () => exports.FunctionCall },
            { no: 5, name: "caller_address", kind: "message", T: () => wrappers_4.StringValue },
            { no: 6, name: "is_final", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { maxGas: 0n, callStack: [], target: { oneofKind: undefined }, isFinal: false };
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
                case /* uint64 max_gas */ 1:
                    message.maxGas = reader.uint64().toBigInt();
                    break;
                case /* repeated massa.model.v1.ExecutionStackElement call_stack */ 2:
                    message.callStack.push(exports.ExecutionStackElement.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* massa.model.v1.BytecodeExecution bytecode_call */ 3:
                    message.target = {
                        oneofKind: "bytecodeCall",
                        bytecodeCall: exports.BytecodeExecution.internalBinaryRead(reader, reader.uint32(), options, message.target.bytecodeCall)
                    };
                    break;
                case /* massa.model.v1.FunctionCall function_call */ 4:
                    message.target = {
                        oneofKind: "functionCall",
                        functionCall: exports.FunctionCall.internalBinaryRead(reader, reader.uint32(), options, message.target.functionCall)
                    };
                    break;
                case /* google.protobuf.StringValue caller_address */ 5:
                    message.callerAddress = wrappers_4.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.callerAddress);
                    break;
                case /* bool is_final */ 6:
                    message.isFinal = reader.bool();
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
        /* uint64 max_gas = 1; */
        if (message.maxGas !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.maxGas);
        /* repeated massa.model.v1.ExecutionStackElement call_stack = 2; */
        for (let i = 0; i < message.callStack.length; i++)
            exports.ExecutionStackElement.internalBinaryWrite(message.callStack[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.BytecodeExecution bytecode_call = 3; */
        if (message.target.oneofKind === "bytecodeCall")
            exports.BytecodeExecution.internalBinaryWrite(message.target.bytecodeCall, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.FunctionCall function_call = 4; */
        if (message.target.oneofKind === "functionCall")
            exports.FunctionCall.internalBinaryWrite(message.target.functionCall, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.StringValue caller_address = 5; */
        if (message.callerAddress)
            wrappers_4.StringValue.internalBinaryWrite(message.callerAddress, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* bool is_final = 6; */
        if (message.isFinal !== false)
            writer.tag(6, runtime_1.WireType.Varint).bool(message.isFinal);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ReadOnlyExecutionCall
 */
exports.ReadOnlyExecutionCall = new ReadOnlyExecutionCall$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BytecodeExecution$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.BytecodeExecution", [
            { no: 1, name: "bytecode", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "operation_datastore", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { bytecode: new Uint8Array(0), operationDatastore: new Uint8Array(0) };
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
                case /* bytes bytecode */ 1:
                    message.bytecode = reader.bytes();
                    break;
                case /* bytes operation_datastore */ 2:
                    message.operationDatastore = reader.bytes();
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
        /* bytes bytecode = 1; */
        if (message.bytecode.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.bytecode);
        /* bytes operation_datastore = 2; */
        if (message.operationDatastore.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.operationDatastore);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.BytecodeExecution
 */
exports.BytecodeExecution = new BytecodeExecution$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FunctionCall$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.FunctionCall", [
            { no: 1, name: "target_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "target_function", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "parameter", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { targetAddress: "", targetFunction: "", parameter: new Uint8Array(0) };
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
                case /* string target_address */ 1:
                    message.targetAddress = reader.string();
                    break;
                case /* string target_function */ 2:
                    message.targetFunction = reader.string();
                    break;
                case /* bytes parameter */ 3:
                    message.parameter = reader.bytes();
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
        /* string target_address = 1; */
        if (message.targetAddress !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.targetAddress);
        /* string target_function = 2; */
        if (message.targetFunction !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.targetFunction);
        /* bytes parameter = 3; */
        if (message.parameter.length)
            writer.tag(3, runtime_1.WireType.LengthDelimited).bytes(message.parameter);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.FunctionCall
 */
exports.FunctionCall = new FunctionCall$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ReadOnlyExecutionOutput$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ReadOnlyExecutionOutput", [
            { no: 1, name: "out", kind: "message", T: () => exports.ExecutionOutput },
            { no: 2, name: "used_gas", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "call_result", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { usedGas: 0n, callResult: new Uint8Array(0) };
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
                case /* massa.model.v1.ExecutionOutput out */ 1:
                    message.out = exports.ExecutionOutput.internalBinaryRead(reader, reader.uint32(), options, message.out);
                    break;
                case /* uint64 used_gas */ 2:
                    message.usedGas = reader.uint64().toBigInt();
                    break;
                case /* bytes call_result */ 3:
                    message.callResult = reader.bytes();
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
        /* massa.model.v1.ExecutionOutput out = 1; */
        if (message.out)
            exports.ExecutionOutput.internalBinaryWrite(message.out, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 used_gas = 2; */
        if (message.usedGas !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.usedGas);
        /* bytes call_result = 3; */
        if (message.callResult.length)
            writer.tag(3, runtime_1.WireType.LengthDelimited).bytes(message.callResult);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ReadOnlyExecutionOutput
 */
exports.ReadOnlyExecutionOutput = new ReadOnlyExecutionOutput$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ExecutionStackElement$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ExecutionStackElement", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "coins", kind: "message", T: () => amount_1.NativeAmount },
            { no: 3, name: "owned_addresses", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "operation_datastore", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => commons_1.BytesMapFieldEntry }
        ]);
    }
    create(value) {
        const message = { address: "", ownedAddresses: [], operationDatastore: [] };
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
                case /* string address */ 1:
                    message.address = reader.string();
                    break;
                case /* massa.model.v1.NativeAmount coins */ 2:
                    message.coins = amount_1.NativeAmount.internalBinaryRead(reader, reader.uint32(), options, message.coins);
                    break;
                case /* repeated string owned_addresses */ 3:
                    message.ownedAddresses.push(reader.string());
                    break;
                case /* repeated massa.model.v1.BytesMapFieldEntry operation_datastore */ 4:
                    message.operationDatastore.push(commons_1.BytesMapFieldEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* string address = 1; */
        if (message.address !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.address);
        /* massa.model.v1.NativeAmount coins = 2; */
        if (message.coins)
            amount_1.NativeAmount.internalBinaryWrite(message.coins, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated string owned_addresses = 3; */
        for (let i = 0; i < message.ownedAddresses.length; i++)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.ownedAddresses[i]);
        /* repeated massa.model.v1.BytesMapFieldEntry operation_datastore = 4; */
        for (let i = 0; i < message.operationDatastore.length; i++)
            commons_1.BytesMapFieldEntry.internalBinaryWrite(message.operationDatastore[i], writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ExecutionStackElement
 */
exports.ExecutionStackElement = new ExecutionStackElement$Type();

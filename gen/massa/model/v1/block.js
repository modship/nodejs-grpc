"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockParent = exports.BlockIds = exports.BlockInfo = exports.BlockWrapper = exports.SignedBlockHeader = exports.SignedBlock = exports.FilledOperationEntry = exports.BlockHeader = exports.FilledBlock = exports.Block = exports.BlockStatus = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const operation_1 = require("./operation");
const endorsement_1 = require("./endorsement");
const slot_1 = require("./slot");
const wrappers_1 = require("../../../google/protobuf/wrappers");
/**
 * Possible statuses for a block
 *
 * @generated from protobuf enum massa.model.v1.BlockStatus
 */
var BlockStatus;
(function (BlockStatus) {
    /**
     * Default enum value
     *
     * @generated from protobuf enum value: BLOCK_STATUS_UNSPECIFIED = 0;
     */
    BlockStatus[BlockStatus["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * The block is in the greatest clique (and not final)
     *
     * @generated from protobuf enum value: BLOCK_STATUS_NON_FINAL_BLOCKCLIQUE = 1;
     */
    BlockStatus[BlockStatus["NON_FINAL_BLOCKCLIQUE"] = 1] = "NON_FINAL_BLOCKCLIQUE";
    /**
     * The block is final
     *
     * @generated from protobuf enum value: BLOCK_STATUS_FINAL = 2;
     */
    BlockStatus[BlockStatus["FINAL"] = 2] = "FINAL";
    /**
     * The block is candidate (active any clique but not final)
     *
     * @generated from protobuf enum value: BLOCK_STATUS_NON_FINAL_ALTERNATE_CLIQUE = 3;
     */
    BlockStatus[BlockStatus["NON_FINAL_ALTERNATE_CLIQUE"] = 3] = "NON_FINAL_ALTERNATE_CLIQUE";
    /**
     * The block is discarded
     *
     * @generated from protobuf enum value: BLOCK_STATUS_DISCARDED = 4;
     */
    BlockStatus[BlockStatus["DISCARDED"] = 4] = "DISCARDED";
})(BlockStatus || (exports.BlockStatus = BlockStatus = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Block$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.Block", [
            { no: 1, name: "header", kind: "message", T: () => exports.SignedBlockHeader },
            { no: 2, name: "operations", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { operations: [] };
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
                case /* massa.model.v1.SignedBlockHeader header */ 1:
                    message.header = exports.SignedBlockHeader.internalBinaryRead(reader, reader.uint32(), options, message.header);
                    break;
                case /* repeated string operations */ 2:
                    message.operations.push(reader.string());
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
        /* massa.model.v1.SignedBlockHeader header = 1; */
        if (message.header)
            exports.SignedBlockHeader.internalBinaryWrite(message.header, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated string operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.operations[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Block
 */
exports.Block = new Block$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FilledBlock$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.FilledBlock", [
            { no: 1, name: "header", kind: "message", T: () => exports.SignedBlockHeader },
            { no: 2, name: "operations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.FilledOperationEntry }
        ]);
    }
    create(value) {
        const message = { operations: [] };
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
                case /* massa.model.v1.SignedBlockHeader header */ 1:
                    message.header = exports.SignedBlockHeader.internalBinaryRead(reader, reader.uint32(), options, message.header);
                    break;
                case /* repeated massa.model.v1.FilledOperationEntry operations */ 2:
                    message.operations.push(exports.FilledOperationEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* massa.model.v1.SignedBlockHeader header = 1; */
        if (message.header)
            exports.SignedBlockHeader.internalBinaryWrite(message.header, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated massa.model.v1.FilledOperationEntry operations = 2; */
        for (let i = 0; i < message.operations.length; i++)
            exports.FilledOperationEntry.internalBinaryWrite(message.operations[i], writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.FilledBlock
 */
exports.FilledBlock = new FilledBlock$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlockHeader$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.BlockHeader", [
            { no: 1, name: "current_version", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 2, name: "announced_version", kind: "message", T: () => wrappers_1.UInt32Value },
            { no: 3, name: "slot", kind: "message", T: () => slot_1.Slot },
            { no: 4, name: "parents", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "operations_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "endorsements", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => endorsement_1.SignedEndorsement }
        ]);
    }
    create(value) {
        const message = { currentVersion: 0, parents: [], operationsHash: "", endorsements: [] };
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
                case /* uint32 current_version */ 1:
                    message.currentVersion = reader.uint32();
                    break;
                case /* google.protobuf.UInt32Value announced_version */ 2:
                    message.announcedVersion = wrappers_1.UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.announcedVersion);
                    break;
                case /* massa.model.v1.Slot slot */ 3:
                    message.slot = slot_1.Slot.internalBinaryRead(reader, reader.uint32(), options, message.slot);
                    break;
                case /* repeated string parents */ 4:
                    message.parents.push(reader.string());
                    break;
                case /* string operations_hash */ 5:
                    message.operationsHash = reader.string();
                    break;
                case /* repeated massa.model.v1.SignedEndorsement endorsements */ 6:
                    message.endorsements.push(endorsement_1.SignedEndorsement.internalBinaryRead(reader, reader.uint32(), options));
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
        /* uint32 current_version = 1; */
        if (message.currentVersion !== 0)
            writer.tag(1, runtime_1.WireType.Varint).uint32(message.currentVersion);
        /* google.protobuf.UInt32Value announced_version = 2; */
        if (message.announcedVersion)
            wrappers_1.UInt32Value.internalBinaryWrite(message.announcedVersion, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Slot slot = 3; */
        if (message.slot)
            slot_1.Slot.internalBinaryWrite(message.slot, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated string parents = 4; */
        for (let i = 0; i < message.parents.length; i++)
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.parents[i]);
        /* string operations_hash = 5; */
        if (message.operationsHash !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.operationsHash);
        /* repeated massa.model.v1.SignedEndorsement endorsements = 6; */
        for (let i = 0; i < message.endorsements.length; i++)
            endorsement_1.SignedEndorsement.internalBinaryWrite(message.endorsements[i], writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.BlockHeader
 */
exports.BlockHeader = new BlockHeader$Type();
// @generated message type with reflection information, may provide speed optimized methods
class FilledOperationEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.FilledOperationEntry", [
            { no: 1, name: "operation_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "operation", kind: "message", T: () => operation_1.SignedOperation }
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
                case /* massa.model.v1.SignedOperation operation */ 2:
                    message.operation = operation_1.SignedOperation.internalBinaryRead(reader, reader.uint32(), options, message.operation);
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
        /* massa.model.v1.SignedOperation operation = 2; */
        if (message.operation)
            operation_1.SignedOperation.internalBinaryWrite(message.operation, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.FilledOperationEntry
 */
exports.FilledOperationEntry = new FilledOperationEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignedBlock$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SignedBlock", [
            { no: 1, name: "content", kind: "message", T: () => exports.Block },
            { no: 2, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "content_creator_pub_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "content_creator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "secure_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "serialized_size", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { signature: "", contentCreatorPubKey: "", contentCreatorAddress: "", secureHash: "", serializedSize: 0n };
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
                case /* massa.model.v1.Block content */ 1:
                    message.content = exports.Block.internalBinaryRead(reader, reader.uint32(), options, message.content);
                    break;
                case /* string signature */ 2:
                    message.signature = reader.string();
                    break;
                case /* string content_creator_pub_key */ 3:
                    message.contentCreatorPubKey = reader.string();
                    break;
                case /* string content_creator_address */ 4:
                    message.contentCreatorAddress = reader.string();
                    break;
                case /* string secure_hash */ 5:
                    message.secureHash = reader.string();
                    break;
                case /* uint64 serialized_size */ 6:
                    message.serializedSize = reader.uint64().toBigInt();
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
        /* massa.model.v1.Block content = 1; */
        if (message.content)
            exports.Block.internalBinaryWrite(message.content, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string signature = 2; */
        if (message.signature !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.signature);
        /* string content_creator_pub_key = 3; */
        if (message.contentCreatorPubKey !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.contentCreatorPubKey);
        /* string content_creator_address = 4; */
        if (message.contentCreatorAddress !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.contentCreatorAddress);
        /* string secure_hash = 5; */
        if (message.secureHash !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.secureHash);
        /* uint64 serialized_size = 6; */
        if (message.serializedSize !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.serializedSize);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SignedBlock
 */
exports.SignedBlock = new SignedBlock$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignedBlockHeader$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SignedBlockHeader", [
            { no: 1, name: "content", kind: "message", T: () => exports.BlockHeader },
            { no: 2, name: "signature", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "content_creator_pub_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "content_creator_address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "secure_hash", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "serialized_size", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { signature: "", contentCreatorPubKey: "", contentCreatorAddress: "", secureHash: "", serializedSize: 0n };
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
                case /* massa.model.v1.BlockHeader content */ 1:
                    message.content = exports.BlockHeader.internalBinaryRead(reader, reader.uint32(), options, message.content);
                    break;
                case /* string signature */ 2:
                    message.signature = reader.string();
                    break;
                case /* string content_creator_pub_key */ 3:
                    message.contentCreatorPubKey = reader.string();
                    break;
                case /* string content_creator_address */ 4:
                    message.contentCreatorAddress = reader.string();
                    break;
                case /* string secure_hash */ 5:
                    message.secureHash = reader.string();
                    break;
                case /* uint64 serialized_size */ 6:
                    message.serializedSize = reader.uint64().toBigInt();
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
        /* massa.model.v1.BlockHeader content = 1; */
        if (message.content)
            exports.BlockHeader.internalBinaryWrite(message.content, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* string signature = 2; */
        if (message.signature !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.signature);
        /* string content_creator_pub_key = 3; */
        if (message.contentCreatorPubKey !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.contentCreatorPubKey);
        /* string content_creator_address = 4; */
        if (message.contentCreatorAddress !== "")
            writer.tag(4, runtime_1.WireType.LengthDelimited).string(message.contentCreatorAddress);
        /* string secure_hash = 5; */
        if (message.secureHash !== "")
            writer.tag(5, runtime_1.WireType.LengthDelimited).string(message.secureHash);
        /* uint64 serialized_size = 6; */
        if (message.serializedSize !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.serializedSize);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SignedBlockHeader
 */
exports.SignedBlockHeader = new SignedBlockHeader$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlockWrapper$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.BlockWrapper", [
            { no: 1, name: "status", kind: "enum", T: () => ["massa.model.v1.BlockStatus", BlockStatus, "BLOCK_STATUS_"] },
            { no: 2, name: "block", kind: "message", T: () => exports.Block }
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
                case /* massa.model.v1.BlockStatus status */ 1:
                    message.status = reader.int32();
                    break;
                case /* massa.model.v1.Block block */ 2:
                    message.block = exports.Block.internalBinaryRead(reader, reader.uint32(), options, message.block);
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
        /* massa.model.v1.BlockStatus status = 1; */
        if (message.status !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.status);
        /* massa.model.v1.Block block = 2; */
        if (message.block)
            exports.Block.internalBinaryWrite(message.block, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.BlockWrapper
 */
exports.BlockWrapper = new BlockWrapper$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlockInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.BlockInfo", [
            { no: 1, name: "block_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "status", kind: "enum", T: () => ["massa.model.v1.BlockStatus", BlockStatus, "BLOCK_STATUS_"] }
        ]);
    }
    create(value) {
        const message = { blockId: "", status: 0 };
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
                case /* string block_id */ 1:
                    message.blockId = reader.string();
                    break;
                case /* massa.model.v1.BlockStatus status */ 2:
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
        /* string block_id = 1; */
        if (message.blockId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.blockId);
        /* massa.model.v1.BlockStatus status = 2; */
        if (message.status !== 0)
            writer.tag(2, runtime_1.WireType.Varint).int32(message.status);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.BlockInfo
 */
exports.BlockInfo = new BlockInfo$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlockIds$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.BlockIds", [
            { no: 1, name: "block_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { blockIds: [] };
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
                case /* repeated string block_ids */ 1:
                    message.blockIds.push(reader.string());
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
        /* repeated string block_ids = 1; */
        for (let i = 0; i < message.blockIds.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.blockIds[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.BlockIds
 */
exports.BlockIds = new BlockIds$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BlockParent$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.BlockParent", [
            { no: 1, name: "block_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "period", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { blockId: "", period: 0n };
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
                case /* string block_id */ 1:
                    message.blockId = reader.string();
                    break;
                case /* uint64 period */ 2:
                    message.period = reader.uint64().toBigInt();
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
        /* string block_id = 1; */
        if (message.blockId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.blockId);
        /* uint64 period = 2; */
        if (message.period !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.period);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.BlockParent
 */
exports.BlockParent = new BlockParent$Type();

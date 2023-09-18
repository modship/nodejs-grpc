"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndorsementInfo = exports.EndorsementWrapper = exports.EndorsementIds = exports.SignedEndorsement = exports.Endorsement = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const slot_1 = require("./slot");
// @generated message type with reflection information, may provide speed optimized methods
class Endorsement$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.Endorsement", [
            { no: 1, name: "slot", kind: "message", T: () => slot_1.Slot },
            { no: 2, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "endorsed_block", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { index: 0, endorsedBlock: "" };
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
                case /* uint32 index */ 2:
                    message.index = reader.uint32();
                    break;
                case /* string endorsed_block */ 3:
                    message.endorsedBlock = reader.string();
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
        /* uint32 index = 2; */
        if (message.index !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.index);
        /* string endorsed_block = 3; */
        if (message.endorsedBlock !== "")
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.endorsedBlock);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Endorsement
 */
exports.Endorsement = new Endorsement$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SignedEndorsement$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SignedEndorsement", [
            { no: 1, name: "content", kind: "message", T: () => exports.Endorsement },
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
                case /* massa.model.v1.Endorsement content */ 1:
                    message.content = exports.Endorsement.internalBinaryRead(reader, reader.uint32(), options, message.content);
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
        /* massa.model.v1.Endorsement content = 1; */
        if (message.content)
            exports.Endorsement.internalBinaryWrite(message.content, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
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
 * @generated MessageType for protobuf message massa.model.v1.SignedEndorsement
 */
exports.SignedEndorsement = new SignedEndorsement$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EndorsementIds$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.EndorsementIds", [
            { no: 1, name: "endorsement_ids", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { endorsementIds: [] };
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
                case /* repeated string endorsement_ids */ 1:
                    message.endorsementIds.push(reader.string());
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
        /* repeated string endorsement_ids = 1; */
        for (let i = 0; i < message.endorsementIds.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.endorsementIds[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.EndorsementIds
 */
exports.EndorsementIds = new EndorsementIds$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EndorsementWrapper$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.EndorsementWrapper", [
            { no: 1, name: "in_pool", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "in_blocks", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "is_final", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "endorsement", kind: "message", T: () => exports.SignedEndorsement }
        ]);
    }
    create(value) {
        const message = { inPool: false, inBlocks: [], isFinal: false };
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
                case /* bool in_pool */ 1:
                    message.inPool = reader.bool();
                    break;
                case /* repeated string in_blocks */ 2:
                    message.inBlocks.push(reader.string());
                    break;
                case /* bool is_final */ 3:
                    message.isFinal = reader.bool();
                    break;
                case /* massa.model.v1.SignedEndorsement endorsement */ 4:
                    message.endorsement = exports.SignedEndorsement.internalBinaryRead(reader, reader.uint32(), options, message.endorsement);
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
        /* bool in_pool = 1; */
        if (message.inPool !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.inPool);
        /* repeated string in_blocks = 2; */
        for (let i = 0; i < message.inBlocks.length; i++)
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.inBlocks[i]);
        /* bool is_final = 3; */
        if (message.isFinal !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.isFinal);
        /* massa.model.v1.SignedEndorsement endorsement = 4; */
        if (message.endorsement)
            exports.SignedEndorsement.internalBinaryWrite(message.endorsement, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.EndorsementWrapper
 */
exports.EndorsementWrapper = new EndorsementWrapper$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EndorsementInfo$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.EndorsementInfo", [
            { no: 1, name: "endorsement_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "in_pool", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "in_blocks", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "is_final", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value) {
        const message = { endorsementId: "", inPool: false, inBlocks: [], isFinal: false };
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
                case /* string endorsement_id */ 1:
                    message.endorsementId = reader.string();
                    break;
                case /* bool in_pool */ 2:
                    message.inPool = reader.bool();
                    break;
                case /* repeated string in_blocks */ 3:
                    message.inBlocks.push(reader.string());
                    break;
                case /* bool is_final */ 4:
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
        /* string endorsement_id = 1; */
        if (message.endorsementId !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.endorsementId);
        /* bool in_pool = 2; */
        if (message.inPool !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.inPool);
        /* repeated string in_blocks = 3; */
        for (let i = 0; i < message.inBlocks.length; i++)
            writer.tag(3, runtime_1.WireType.LengthDelimited).string(message.inBlocks[i]);
        /* bool is_final = 4; */
        if (message.isFinal !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.isFinal);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.EndorsementInfo
 */
exports.EndorsementInfo = new EndorsementInfo$Type();

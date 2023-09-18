"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DenunciationEndorsement = exports.DenunciationBlockHeader = exports.DenunciationIndex = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const slot_1 = require("./slot");
// @generated message type with reflection information, may provide speed optimized methods
class DenunciationIndex$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.DenunciationIndex", [
            { no: 1, name: "block_header", kind: "message", oneof: "entry", T: () => exports.DenunciationBlockHeader },
            { no: 2, name: "endorsement", kind: "message", oneof: "entry", T: () => exports.DenunciationEndorsement }
        ]);
    }
    create(value) {
        const message = { entry: { oneofKind: undefined } };
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
                case /* massa.model.v1.DenunciationBlockHeader block_header */ 1:
                    message.entry = {
                        oneofKind: "blockHeader",
                        blockHeader: exports.DenunciationBlockHeader.internalBinaryRead(reader, reader.uint32(), options, message.entry.blockHeader)
                    };
                    break;
                case /* massa.model.v1.DenunciationEndorsement endorsement */ 2:
                    message.entry = {
                        oneofKind: "endorsement",
                        endorsement: exports.DenunciationEndorsement.internalBinaryRead(reader, reader.uint32(), options, message.entry.endorsement)
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
        /* massa.model.v1.DenunciationBlockHeader block_header = 1; */
        if (message.entry.oneofKind === "blockHeader")
            exports.DenunciationBlockHeader.internalBinaryWrite(message.entry.blockHeader, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.DenunciationEndorsement endorsement = 2; */
        if (message.entry.oneofKind === "endorsement")
            exports.DenunciationEndorsement.internalBinaryWrite(message.entry.endorsement, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.DenunciationIndex
 */
exports.DenunciationIndex = new DenunciationIndex$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DenunciationBlockHeader$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.DenunciationBlockHeader", [
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
 * @generated MessageType for protobuf message massa.model.v1.DenunciationBlockHeader
 */
exports.DenunciationBlockHeader = new DenunciationBlockHeader$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DenunciationEndorsement$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.DenunciationEndorsement", [
            { no: 1, name: "slot", kind: "message", T: () => slot_1.Slot },
            { no: 2, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { index: 0 };
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
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.DenunciationEndorsement
 */
exports.DenunciationEndorsement = new DenunciationEndorsement$Type();

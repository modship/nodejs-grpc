"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EndorsementDraw = exports.SlotDraw = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
const wrappers_1 = require("../../../google/protobuf/wrappers");
const slot_1 = require("./slot");
// @generated message type with reflection information, may provide speed optimized methods
class SlotDraw$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SlotDraw", [
            { no: 1, name: "slot", kind: "message", T: () => slot_1.Slot },
            { no: 2, name: "block_producer", kind: "message", T: () => wrappers_1.StringValue },
            { no: 3, name: "endorsement_draws", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.EndorsementDraw }
        ]);
    }
    create(value) {
        const message = { endorsementDraws: [] };
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
                case /* google.protobuf.StringValue block_producer */ 2:
                    message.blockProducer = wrappers_1.StringValue.internalBinaryRead(reader, reader.uint32(), options, message.blockProducer);
                    break;
                case /* repeated massa.model.v1.EndorsementDraw endorsement_draws */ 3:
                    message.endorsementDraws.push(exports.EndorsementDraw.internalBinaryRead(reader, reader.uint32(), options));
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
        /* google.protobuf.StringValue block_producer = 2; */
        if (message.blockProducer)
            wrappers_1.StringValue.internalBinaryWrite(message.blockProducer, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* repeated massa.model.v1.EndorsementDraw endorsement_draws = 3; */
        for (let i = 0; i < message.endorsementDraws.length; i++)
            exports.EndorsementDraw.internalBinaryWrite(message.endorsementDraws[i], writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SlotDraw
 */
exports.SlotDraw = new SlotDraw$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EndorsementDraw$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.EndorsementDraw", [
            { no: 1, name: "index", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "producer", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { index: 0n, producer: "" };
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
                case /* uint64 index */ 1:
                    message.index = reader.uint64().toBigInt();
                    break;
                case /* string producer */ 2:
                    message.producer = reader.string();
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
        /* uint64 index = 1; */
        if (message.index !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.index);
        /* string producer = 2; */
        if (message.producer !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.producer);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.EndorsementDraw
 */
exports.EndorsementDraw = new EndorsementDraw$Type();

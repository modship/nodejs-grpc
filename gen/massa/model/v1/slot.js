"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlotRange = exports.Slots = exports.Slot = exports.IndexedSlot = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class IndexedSlot$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.IndexedSlot", [
            { no: 1, name: "slot", kind: "message", T: () => exports.Slot },
            { no: 2, name: "index", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value) {
        const message = { index: 0n };
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
                    message.slot = exports.Slot.internalBinaryRead(reader, reader.uint32(), options, message.slot);
                    break;
                case /* uint64 index */ 2:
                    message.index = reader.uint64().toBigInt();
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
            exports.Slot.internalBinaryWrite(message.slot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint64 index = 2; */
        if (message.index !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.IndexedSlot
 */
exports.IndexedSlot = new IndexedSlot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Slot$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.Slot", [
            { no: 1, name: "period", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "thread", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value) {
        const message = { period: 0n, thread: 0 };
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
                case /* uint64 period */ 1:
                    message.period = reader.uint64().toBigInt();
                    break;
                case /* uint32 thread */ 2:
                    message.thread = reader.uint32();
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
        /* uint64 period = 1; */
        if (message.period !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.period);
        /* uint32 thread = 2; */
        if (message.thread !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.thread);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Slot
 */
exports.Slot = new Slot$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Slots$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.Slots", [
            { no: 1, name: "slots", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.Slot }
        ]);
    }
    create(value) {
        const message = { slots: [] };
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
                case /* repeated massa.model.v1.Slot slots */ 1:
                    message.slots.push(exports.Slot.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated massa.model.v1.Slot slots = 1; */
        for (let i = 0; i < message.slots.length; i++)
            exports.Slot.internalBinaryWrite(message.slots[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Slots
 */
exports.Slots = new Slots$Type();
// @generated message type with reflection information, may provide speed optimized methods
class SlotRange$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.SlotRange", [
            { no: 1, name: "start_slot", kind: "message", T: () => exports.Slot },
            { no: 2, name: "end_slot", kind: "message", T: () => exports.Slot }
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
                case /* massa.model.v1.Slot start_slot */ 1:
                    message.startSlot = exports.Slot.internalBinaryRead(reader, reader.uint32(), options, message.startSlot);
                    break;
                case /* massa.model.v1.Slot end_slot */ 2:
                    message.endSlot = exports.Slot.internalBinaryRead(reader, reader.uint32(), options, message.endSlot);
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
        /* massa.model.v1.Slot start_slot = 1; */
        if (message.startSlot)
            exports.Slot.internalBinaryWrite(message.startSlot, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.Slot end_slot = 2; */
        if (message.endSlot)
            exports.Slot.internalBinaryWrite(message.endSlot, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.SlotRange
 */
exports.SlotRange = new SlotRange$Type();

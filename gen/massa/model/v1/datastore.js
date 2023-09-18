"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatastoreEntry = exports.AddressKeyEntry = exports.AddressKeysEntries = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
// @generated message type with reflection information, may provide speed optimized methods
class AddressKeysEntries$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.AddressKeysEntries", [
            { no: 1, name: "address_key_entries", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => exports.AddressKeyEntry }
        ]);
    }
    create(value) {
        const message = { addressKeyEntries: [] };
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
                case /* repeated massa.model.v1.AddressKeyEntry address_key_entries */ 1:
                    message.addressKeyEntries.push(exports.AddressKeyEntry.internalBinaryRead(reader, reader.uint32(), options));
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
        /* repeated massa.model.v1.AddressKeyEntry address_key_entries = 1; */
        for (let i = 0; i < message.addressKeyEntries.length; i++)
            exports.AddressKeyEntry.internalBinaryWrite(message.addressKeyEntries[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.AddressKeysEntries
 */
exports.AddressKeysEntries = new AddressKeysEntries$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AddressKeyEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.AddressKeyEntry", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { address: "", key: new Uint8Array(0) };
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
                case /* bytes key */ 2:
                    message.key = reader.bytes();
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
        /* bytes key = 2; */
        if (message.key.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.AddressKeyEntry
 */
exports.AddressKeyEntry = new AddressKeyEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DatastoreEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.DatastoreEntry", [
            { no: 1, name: "final_value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "candidate_value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { finalValue: new Uint8Array(0), candidateValue: new Uint8Array(0) };
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
                case /* bytes final_value */ 1:
                    message.finalValue = reader.bytes();
                    break;
                case /* bytes candidate_value */ 2:
                    message.candidateValue = reader.bytes();
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
        /* bytes final_value = 1; */
        if (message.finalValue.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.finalValue);
        /* bytes candidate_value = 2; */
        if (message.candidateValue.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.candidateValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.DatastoreEntry
 */
exports.DatastoreEntry = new DatastoreEntry$Type();

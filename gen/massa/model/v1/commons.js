"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeyPair = exports.ArrayOfBytesWrapper = exports.BytesMapFieldEntry = exports.Empty = exports.Error = exports.ComparisonResult = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * Comparison result
 *
 * @generated from protobuf enum massa.model.v1.ComparisonResult
 */
var ComparisonResult;
(function (ComparisonResult) {
    /**
     * @generated from protobuf enum value: COMPARISON_RESULT_UNSPECIFIED = 0;
     */
    ComparisonResult[ComparisonResult["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * left is lower
     *
     * @generated from protobuf enum value: COMPARISON_RESULT_LOWER = 1;
     */
    ComparisonResult[ComparisonResult["LOWER"] = 1] = "LOWER";
    /**
     * left and right are equal
     *
     * @generated from protobuf enum value: COMPARISON_RESULT_EQUAL = 2;
     */
    ComparisonResult[ComparisonResult["EQUAL"] = 2] = "EQUAL";
    /**
     * left is greater
     *
     * @generated from protobuf enum value: COMPARISON_RESULT_GREATER = 3;
     */
    ComparisonResult[ComparisonResult["GREATER"] = 3] = "GREATER";
})(ComparisonResult || (exports.ComparisonResult = ComparisonResult = {}));
// @generated message type with reflection information, may provide speed optimized methods
class Error$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.Error", [
            { no: 1, name: "code", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { code: 0, message: "" };
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
                case /* int32 code */ 1:
                    message.code = reader.int32();
                    break;
                case /* string message */ 2:
                    message.message = reader.string();
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
        /* int32 code = 1; */
        if (message.code !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.code);
        /* string message = 2; */
        if (message.message !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Error
 */
exports.Error = new Error$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.Empty", []);
    }
    create(value) {
        const message = {};
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    }
    internalBinaryRead(reader, length, options, target) {
        return target ?? this.create();
    }
    internalBinaryWrite(message, writer, options) {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Empty
 */
exports.Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BytesMapFieldEntry$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.BytesMapFieldEntry", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { key: new Uint8Array(0), value: new Uint8Array(0) };
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
                case /* bytes key */ 1:
                    message.key = reader.bytes();
                    break;
                case /* bytes value */ 2:
                    message.value = reader.bytes();
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
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.key);
        /* bytes value = 2; */
        if (message.value.length)
            writer.tag(2, runtime_1.WireType.LengthDelimited).bytes(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.BytesMapFieldEntry
 */
exports.BytesMapFieldEntry = new BytesMapFieldEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ArrayOfBytesWrapper$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.ArrayOfBytesWrapper", [
            { no: 1, name: "items", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { items: [] };
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
                case /* repeated bytes items */ 1:
                    message.items.push(reader.bytes());
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
        /* repeated bytes items = 1; */
        for (let i = 0; i < message.items.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).bytes(message.items[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ArrayOfBytesWrapper
 */
exports.ArrayOfBytesWrapper = new ArrayOfBytesWrapper$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeyPair$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.KeyPair", [
            { no: 1, name: "public_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "secret_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { publicKey: "", secretKey: "" };
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
                case /* string public_key */ 1:
                    message.publicKey = reader.string();
                    break;
                case /* string secret_key */ 2:
                    message.secretKey = reader.string();
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
        /* string public_key = 1; */
        if (message.publicKey !== "")
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.publicKey);
        /* string secret_key = 2; */
        if (message.secretKey !== "")
            writer.tag(2, runtime_1.WireType.LengthDelimited).string(message.secretKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.KeyPair
 */
exports.KeyPair = new KeyPair$Type();

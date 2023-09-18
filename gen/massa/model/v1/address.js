"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Addresses = exports.NativeAddress = exports.AddressCategory = void 0;
const runtime_1 = require("@protobuf-ts/runtime");
const runtime_2 = require("@protobuf-ts/runtime");
const runtime_3 = require("@protobuf-ts/runtime");
const runtime_4 = require("@protobuf-ts/runtime");
const runtime_5 = require("@protobuf-ts/runtime");
/**
 * Address category discriminant
 *
 * @generated from protobuf enum massa.model.v1.AddressCategory
 */
var AddressCategory;
(function (AddressCategory) {
    /**
     * Unspecified address category
     *
     * @generated from protobuf enum value: ADDRESS_CATEGORY_UNSPECIFIED = 0;
     */
    AddressCategory[AddressCategory["UNSPECIFIED"] = 0] = "UNSPECIFIED";
    /**
     * User address
     *
     * @generated from protobuf enum value: ADDRESS_CATEGORY_USER_ADDRESS = 1;
     */
    AddressCategory[AddressCategory["USER_ADDRESS"] = 1] = "USER_ADDRESS";
    /**
     * Smart contract address
     *
     * @generated from protobuf enum value: ADDRESS_CATEGORY_SC_ADDRESS = 2;
     */
    AddressCategory[AddressCategory["SC_ADDRESS"] = 2] = "SC_ADDRESS";
})(AddressCategory || (exports.AddressCategory = AddressCategory = {}));
// @generated message type with reflection information, may provide speed optimized methods
class NativeAddress$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.NativeAddress", [
            { no: 1, name: "category", kind: "enum", T: () => ["massa.model.v1.AddressCategory", AddressCategory, "ADDRESS_CATEGORY_"] },
            { no: 2, name: "version", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "content", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value) {
        const message = { category: 0, version: 0n, content: new Uint8Array(0) };
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
                case /* massa.model.v1.AddressCategory category */ 1:
                    message.category = reader.int32();
                    break;
                case /* uint64 version */ 2:
                    message.version = reader.uint64().toBigInt();
                    break;
                case /* bytes content */ 3:
                    message.content = reader.bytes();
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
        /* massa.model.v1.AddressCategory category = 1; */
        if (message.category !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.category);
        /* uint64 version = 2; */
        if (message.version !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.version);
        /* bytes content = 3; */
        if (message.content.length)
            writer.tag(3, runtime_1.WireType.LengthDelimited).bytes(message.content);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.NativeAddress
 */
exports.NativeAddress = new NativeAddress$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Addresses$Type extends runtime_5.MessageType {
    constructor() {
        super("massa.model.v1.Addresses", [
            { no: 1, name: "addresses", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value) {
        const message = { addresses: [] };
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
                case /* repeated string addresses */ 1:
                    message.addresses.push(reader.string());
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
        /* repeated string addresses = 1; */
        for (let i = 0; i < message.addresses.length; i++)
            writer.tag(1, runtime_1.WireType.LengthDelimited).string(message.addresses[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Addresses
 */
exports.Addresses = new Addresses$Type();

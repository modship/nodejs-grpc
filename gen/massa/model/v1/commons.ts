// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "massa/model/v1/commons.proto" (package "massa.model.v1", syntax proto3)
// tslint:disable
//
// Copyright (c) 2023 MASSA LABS <info@massa.net>
//
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MESSAGE_TYPE } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
/**
 * Massa error
 *
 * @generated from protobuf message massa.model.v1.Error
 */
export interface Error {
    /**
     * The error code
     *
     * @generated from protobuf field: int32 code = 1;
     */
    code: number;
    /**
     * A developer-facing error message, which should be in English
     *
     * @generated from protobuf field: string message = 2;
     */
    message: string;
}
/**
 * Empty
 *
 * @generated from protobuf message massa.model.v1.Empty
 */
export interface Empty {
}
/**
 * BytesMapFieldEntry
 *
 * @generated from protobuf message massa.model.v1.BytesMapFieldEntry
 */
export interface BytesMapFieldEntry {
    /**
     * bytes key
     *
     * @generated from protobuf field: bytes key = 1;
     */
    key: Uint8Array;
    /**
     * bytes key
     *
     * @generated from protobuf field: bytes value = 2;
     */
    value: Uint8Array;
}
/**
 * Array of bytes wrapper
 *
 * @generated from protobuf message massa.model.v1.ArrayOfBytesWrapper
 */
export interface ArrayOfBytesWrapper {
    /**
     * Repeated bytes
     *
     * @generated from protobuf field: repeated bytes items = 1;
     */
    items: Uint8Array[];
}
/**
 * KeyPair
 *
 * @generated from protobuf message massa.model.v1.KeyPair
 */
export interface KeyPair {
    /**
     * Public key
     *
     * @generated from protobuf field: string public_key = 1;
     */
    publicKey: string;
    /**
     * Secret key
     *
     * @generated from protobuf field: string secret_key = 2;
     */
    secretKey: string;
}
/**
 * Comparison result
 *
 * @generated from protobuf enum massa.model.v1.ComparisonResult
 */
export enum ComparisonResult {
    /**
     * @generated from protobuf enum value: COMPARISON_RESULT_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * left is lower
     *
     * @generated from protobuf enum value: COMPARISON_RESULT_LOWER = 1;
     */
    LOWER = 1,
    /**
     * left and right are equal
     *
     * @generated from protobuf enum value: COMPARISON_RESULT_EQUAL = 2;
     */
    EQUAL = 2,
    /**
     * left is greater
     *
     * @generated from protobuf enum value: COMPARISON_RESULT_GREATER = 3;
     */
    GREATER = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class Error$Type extends MessageType<Error> {
    constructor() {
        super("massa.model.v1.Error", [
            { no: 1, name: "code", kind: "scalar", T: 5 /*ScalarType.INT32*/ },
            { no: 2, name: "message", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<Error>): Error {
        const message = { code: 0, message: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Error>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Error): Error {
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: Error, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* int32 code = 1; */
        if (message.code !== 0)
            writer.tag(1, WireType.Varint).int32(message.code);
        /* string message = 2; */
        if (message.message !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.message);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Error
 */
export const Error = new Error$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Empty$Type extends MessageType<Empty> {
    constructor() {
        super("massa.model.v1.Empty", []);
    }
    create(value?: PartialMessage<Empty>): Empty {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<Empty>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Empty): Empty {
        return target ?? this.create();
    }
    internalBinaryWrite(message: Empty, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.Empty
 */
export const Empty = new Empty$Type();
// @generated message type with reflection information, may provide speed optimized methods
class BytesMapFieldEntry$Type extends MessageType<BytesMapFieldEntry> {
    constructor() {
        super("massa.model.v1.BytesMapFieldEntry", [
            { no: 1, name: "key", kind: "scalar", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "value", kind: "scalar", T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<BytesMapFieldEntry>): BytesMapFieldEntry {
        const message = { key: new Uint8Array(0), value: new Uint8Array(0) };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<BytesMapFieldEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BytesMapFieldEntry): BytesMapFieldEntry {
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: BytesMapFieldEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes key = 1; */
        if (message.key.length)
            writer.tag(1, WireType.LengthDelimited).bytes(message.key);
        /* bytes value = 2; */
        if (message.value.length)
            writer.tag(2, WireType.LengthDelimited).bytes(message.value);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.BytesMapFieldEntry
 */
export const BytesMapFieldEntry = new BytesMapFieldEntry$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ArrayOfBytesWrapper$Type extends MessageType<ArrayOfBytesWrapper> {
    constructor() {
        super("massa.model.v1.ArrayOfBytesWrapper", [
            { no: 1, name: "items", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 12 /*ScalarType.BYTES*/ }
        ]);
    }
    create(value?: PartialMessage<ArrayOfBytesWrapper>): ArrayOfBytesWrapper {
        const message = { items: [] };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<ArrayOfBytesWrapper>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ArrayOfBytesWrapper): ArrayOfBytesWrapper {
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ArrayOfBytesWrapper, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated bytes items = 1; */
        for (let i = 0; i < message.items.length; i++)
            writer.tag(1, WireType.LengthDelimited).bytes(message.items[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.ArrayOfBytesWrapper
 */
export const ArrayOfBytesWrapper = new ArrayOfBytesWrapper$Type();
// @generated message type with reflection information, may provide speed optimized methods
class KeyPair$Type extends MessageType<KeyPair> {
    constructor() {
        super("massa.model.v1.KeyPair", [
            { no: 1, name: "public_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "secret_key", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<KeyPair>): KeyPair {
        const message = { publicKey: "", secretKey: "" };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<KeyPair>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KeyPair): KeyPair {
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: KeyPair, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string public_key = 1; */
        if (message.publicKey !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.publicKey);
        /* string secret_key = 2; */
        if (message.secretKey !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.secretKey);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.KeyPair
 */
export const KeyPair = new KeyPair$Type();

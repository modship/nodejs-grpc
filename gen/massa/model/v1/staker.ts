// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "massa/model/v1/staker.proto" (package "massa.model.v1", syntax proto3)
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
 * StakerEntry
 *
 * @generated from protobuf message massa.model.v1.StakerEntry
 */
export interface StakerEntry {
    /**
     * Address
     *
     * @generated from protobuf field: string address = 1;
     */
    address: string;
    /**
     * Rolls
     *
     * @generated from protobuf field: uint64 rolls = 2;
     */
    rolls: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class StakerEntry$Type extends MessageType<StakerEntry> {
    constructor() {
        super("massa.model.v1.StakerEntry", [
            { no: 1, name: "address", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "rolls", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<StakerEntry>): StakerEntry {
        const message = { address: "", rolls: 0n };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<StakerEntry>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StakerEntry): StakerEntry {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string address */ 1:
                    message.address = reader.string();
                    break;
                case /* uint64 rolls */ 2:
                    message.rolls = reader.uint64().toBigInt();
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
    internalBinaryWrite(message: StakerEntry, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string address = 1; */
        if (message.address !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.address);
        /* uint64 rolls = 2; */
        if (message.rolls !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.rolls);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.StakerEntry
 */
export const StakerEntry = new StakerEntry$Type();

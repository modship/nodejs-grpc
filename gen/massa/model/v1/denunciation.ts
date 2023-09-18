// @generated by protobuf-ts 2.9.1
// @generated from protobuf file "massa/model/v1/denunciation.proto" (package "massa.model.v1", syntax proto3)
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
import { Slot } from "./slot";
/**
 * Index for Denunciations in collections (e.g. like a HashMap...)
 *
 * @generated from protobuf message massa.model.v1.DenunciationIndex
 */
export interface DenunciationIndex {
    /**
     * @generated from protobuf oneof: entry
     */
    entry: {
        oneofKind: "blockHeader";
        /**
         * Denunciation block header
         *
         * @generated from protobuf field: massa.model.v1.DenunciationBlockHeader block_header = 1;
         */
        blockHeader: DenunciationBlockHeader;
    } | {
        oneofKind: "endorsement";
        /**
         * Denunciation endorsement
         *
         * @generated from protobuf field: massa.model.v1.DenunciationEndorsement endorsement = 2;
         */
        endorsement: DenunciationEndorsement;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Variant for Block header denunciation index
 *
 * @generated from protobuf message massa.model.v1.DenunciationBlockHeader
 */
export interface DenunciationBlockHeader {
    /**
     * Denounciation slot
     *
     * @generated from protobuf field: massa.model.v1.Slot slot = 1;
     */
    slot?: Slot;
}
/**
 * Variant for Endorsement denunciation index
 *
 * @generated from protobuf message massa.model.v1.DenunciationEndorsement
 */
export interface DenunciationEndorsement {
    /**
     * Denounciation slot
     *
     * @generated from protobuf field: massa.model.v1.Slot slot = 1;
     */
    slot?: Slot;
    /**
     * Denounciation index
     *
     * @generated from protobuf field: uint32 index = 2;
     */
    index: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class DenunciationIndex$Type extends MessageType<DenunciationIndex> {
    constructor() {
        super("massa.model.v1.DenunciationIndex", [
            { no: 1, name: "block_header", kind: "message", oneof: "entry", T: () => DenunciationBlockHeader },
            { no: 2, name: "endorsement", kind: "message", oneof: "entry", T: () => DenunciationEndorsement }
        ]);
    }
    create(value?: PartialMessage<DenunciationIndex>): DenunciationIndex {
        const message = { entry: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DenunciationIndex>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DenunciationIndex): DenunciationIndex {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* massa.model.v1.DenunciationBlockHeader block_header */ 1:
                    message.entry = {
                        oneofKind: "blockHeader",
                        blockHeader: DenunciationBlockHeader.internalBinaryRead(reader, reader.uint32(), options, (message.entry as any).blockHeader)
                    };
                    break;
                case /* massa.model.v1.DenunciationEndorsement endorsement */ 2:
                    message.entry = {
                        oneofKind: "endorsement",
                        endorsement: DenunciationEndorsement.internalBinaryRead(reader, reader.uint32(), options, (message.entry as any).endorsement)
                    };
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
    internalBinaryWrite(message: DenunciationIndex, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* massa.model.v1.DenunciationBlockHeader block_header = 1; */
        if (message.entry.oneofKind === "blockHeader")
            DenunciationBlockHeader.internalBinaryWrite(message.entry.blockHeader, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* massa.model.v1.DenunciationEndorsement endorsement = 2; */
        if (message.entry.oneofKind === "endorsement")
            DenunciationEndorsement.internalBinaryWrite(message.entry.endorsement, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.DenunciationIndex
 */
export const DenunciationIndex = new DenunciationIndex$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DenunciationBlockHeader$Type extends MessageType<DenunciationBlockHeader> {
    constructor() {
        super("massa.model.v1.DenunciationBlockHeader", [
            { no: 1, name: "slot", kind: "message", T: () => Slot }
        ]);
    }
    create(value?: PartialMessage<DenunciationBlockHeader>): DenunciationBlockHeader {
        const message = {};
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DenunciationBlockHeader>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DenunciationBlockHeader): DenunciationBlockHeader {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* massa.model.v1.Slot slot */ 1:
                    message.slot = Slot.internalBinaryRead(reader, reader.uint32(), options, message.slot);
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
    internalBinaryWrite(message: DenunciationBlockHeader, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* massa.model.v1.Slot slot = 1; */
        if (message.slot)
            Slot.internalBinaryWrite(message.slot, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.DenunciationBlockHeader
 */
export const DenunciationBlockHeader = new DenunciationBlockHeader$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DenunciationEndorsement$Type extends MessageType<DenunciationEndorsement> {
    constructor() {
        super("massa.model.v1.DenunciationEndorsement", [
            { no: 1, name: "slot", kind: "message", T: () => Slot },
            { no: 2, name: "index", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<DenunciationEndorsement>): DenunciationEndorsement {
        const message = { index: 0 };
        globalThis.Object.defineProperty(message, MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            reflectionMergePartial<DenunciationEndorsement>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DenunciationEndorsement): DenunciationEndorsement {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* massa.model.v1.Slot slot */ 1:
                    message.slot = Slot.internalBinaryRead(reader, reader.uint32(), options, message.slot);
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
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: DenunciationEndorsement, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* massa.model.v1.Slot slot = 1; */
        if (message.slot)
            Slot.internalBinaryWrite(message.slot, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint32 index = 2; */
        if (message.index !== 0)
            writer.tag(2, WireType.Varint).uint32(message.index);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message massa.model.v1.DenunciationEndorsement
 */
export const DenunciationEndorsement = new DenunciationEndorsement$Type();

// source: massa/api/v1/public.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

var google_api_annotations_pb = require('../../../google/api/annotations_pb.js');
goog.object.extend(proto, google_api_annotations_pb);
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
goog.object.extend(proto, google_protobuf_wrappers_pb);
var massa_model_v1_address_pb = require('../../../massa/model/v1/address_pb.js');
goog.object.extend(proto, massa_model_v1_address_pb);
var massa_model_v1_amount_pb = require('../../../massa/model/v1/amount_pb.js');
goog.object.extend(proto, massa_model_v1_amount_pb);
var massa_model_v1_block_pb = require('../../../massa/model/v1/block_pb.js');
goog.object.extend(proto, massa_model_v1_block_pb);
var massa_model_v1_commons_pb = require('../../../massa/model/v1/commons_pb.js');
goog.object.extend(proto, massa_model_v1_commons_pb);
var massa_model_v1_datastore_pb = require('../../../massa/model/v1/datastore_pb.js');
goog.object.extend(proto, massa_model_v1_datastore_pb);
var massa_model_v1_denunciation_pb = require('../../../massa/model/v1/denunciation_pb.js');
goog.object.extend(proto, massa_model_v1_denunciation_pb);
var massa_model_v1_draw_pb = require('../../../massa/model/v1/draw_pb.js');
goog.object.extend(proto, massa_model_v1_draw_pb);
var massa_model_v1_endorsement_pb = require('../../../massa/model/v1/endorsement_pb.js');
goog.object.extend(proto, massa_model_v1_endorsement_pb);
var massa_model_v1_execution_pb = require('../../../massa/model/v1/execution_pb.js');
goog.object.extend(proto, massa_model_v1_execution_pb);
var massa_model_v1_node_pb = require('../../../massa/model/v1/node_pb.js');
goog.object.extend(proto, massa_model_v1_node_pb);
var massa_model_v1_operation_pb = require('../../../massa/model/v1/operation_pb.js');
goog.object.extend(proto, massa_model_v1_operation_pb);
var massa_model_v1_slot_pb = require('../../../massa/model/v1/slot_pb.js');
goog.object.extend(proto, massa_model_v1_slot_pb);
var massa_model_v1_staker_pb = require('../../../massa/model/v1/staker_pb.js');
goog.object.extend(proto, massa_model_v1_staker_pb);
goog.exportSymbol('proto.massa.api.v1.AddressBalanceCandidate', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressBalanceFinal', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressBytecodeCandidate', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressBytecodeFinal', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressDatastoreKeysCandidate', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressDatastoreKeysFinal', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressDatastoreValueCandidate', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressDatastoreValueFinal', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressDeferredCreditsCandidate', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressDeferredCreditsFinal', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressExistsCandidate', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressExistsFinal', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressRollsCandidate', null, global);
goog.exportSymbol('proto.massa.api.v1.AddressRollsFinal', null, global);
goog.exportSymbol('proto.massa.api.v1.AsyncPoolChangesFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.AsyncPoolChangesFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.CycleInfos', null, global);
goog.exportSymbol('proto.massa.api.v1.DeferredCreditsEntry', null, global);
goog.exportSymbol('proto.massa.api.v1.DeferredCreditsEntryWrapper', null, global);
goog.exportSymbol('proto.massa.api.v1.DenunciationExecutionStatusCandidate', null, global);
goog.exportSymbol('proto.massa.api.v1.DenunciationExecutionStatusFinal', null, global);
goog.exportSymbol('proto.massa.api.v1.Events', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecuteReadOnlyCallRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecuteReadOnlyCallResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutedDenounciationFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutedDenounciationFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutedOpsChangesFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutedOpsChangesFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionEventFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionEventFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryCycleInfos', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryExecutionStatus', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryRequestItem', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryRequestItem.RequestItemCase', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryResponse.ResponseCase', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryResponseItem', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryResponseItem.ResponseItemCase', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryStakerInfo', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryStakerInfoEntry', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats', null, global);
goog.exportSymbol('proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry', null, global);
goog.exportSymbol('proto.massa.api.v1.GetBlocksRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetBlocksResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetDatastoreEntriesRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetDatastoreEntriesResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetDatastoreEntryFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.GetDatastoreEntryFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.GetEndorsementsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetEndorsementsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetNextBlockBestParentsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetNextBlockBestParentsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetOperationsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetOperationsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetScExecutionEventsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetScExecutionEventsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetSelectorDrawsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetSelectorDrawsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetStakersRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetStakersResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetStatusRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetStatusResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.GetTransactionsThroughputRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.GetTransactionsThroughputResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.LedgerChangesFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.LedgerChangesFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.NewBlocksFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.NewBlocksFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.NewBlocksRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewBlocksResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.NewEndorsementsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.NewEndorsementsFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.NewEndorsementsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewEndorsementsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.NewFilledBlocksFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.NewFilledBlocksFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.NewFilledBlocksRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewFilledBlocksResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.NewOperationsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.NewOperationsFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.NewOperationsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewOperationsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.NewSlotExecutionOutputsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.NewSlotExecutionOutputsFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.NewSlotExecutionOutputsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.NewSlotExecutionOutputsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.OpExecutionStatusCandidate', null, global);
goog.exportSymbol('proto.massa.api.v1.OpExecutionStatusFinal', null, global);
goog.exportSymbol('proto.massa.api.v1.PosChangesFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.PosChangesFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.QueryStateRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.QueryStateResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.ScExecutionEventsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.ScExecutionEventsFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.ScOutputEventsWrapper', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchBlocksFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchBlocksFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchBlocksRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchBlocksResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchEndorsementsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchEndorsementsFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchEndorsementsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchEndorsementsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchOperationsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchOperationsFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchOperationsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.SearchOperationsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.SelectorDrawsFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.SelectorDrawsFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.SendBlocksRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.SendBlocksResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.SendBlocksResponse.ResultCase', null, global);
goog.exportSymbol('proto.massa.api.v1.SendEndorsementsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.SendEndorsementsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.SendEndorsementsResponse.ResultCase', null, global);
goog.exportSymbol('proto.massa.api.v1.SendOperationsRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.SendOperationsResponse', null, global);
goog.exportSymbol('proto.massa.api.v1.SendOperationsResponse.ResultCase', null, global);
goog.exportSymbol('proto.massa.api.v1.StakersFilter', null, global);
goog.exportSymbol('proto.massa.api.v1.StakersFilter.FilterCase', null, global);
goog.exportSymbol('proto.massa.api.v1.TransactionsThroughputRequest', null, global);
goog.exportSymbol('proto.massa.api.v1.TransactionsThroughputResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecuteReadOnlyCallRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.ExecuteReadOnlyCallRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecuteReadOnlyCallRequest.displayName = 'proto.massa.api.v1.ExecuteReadOnlyCallRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecuteReadOnlyCallResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.ExecuteReadOnlyCallResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecuteReadOnlyCallResponse.displayName = 'proto.massa.api.v1.ExecuteReadOnlyCallResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetBlocksRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetBlocksRequest.displayName = 'proto.massa.api.v1.GetBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetBlocksResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetBlocksResponse.displayName = 'proto.massa.api.v1.GetBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetDatastoreEntriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetDatastoreEntriesRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetDatastoreEntriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetDatastoreEntriesRequest.displayName = 'proto.massa.api.v1.GetDatastoreEntriesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetDatastoreEntryFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.GetDatastoreEntryFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.GetDatastoreEntryFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetDatastoreEntryFilter.displayName = 'proto.massa.api.v1.GetDatastoreEntryFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetDatastoreEntriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetDatastoreEntriesResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetDatastoreEntriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetDatastoreEntriesResponse.displayName = 'proto.massa.api.v1.GetDatastoreEntriesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetEndorsementsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetEndorsementsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetEndorsementsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetEndorsementsRequest.displayName = 'proto.massa.api.v1.GetEndorsementsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetEndorsementsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetEndorsementsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetEndorsementsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetEndorsementsResponse.displayName = 'proto.massa.api.v1.GetEndorsementsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetNextBlockBestParentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetNextBlockBestParentsRequest.displayName = 'proto.massa.api.v1.GetNextBlockBestParentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetNextBlockBestParentsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetNextBlockBestParentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetNextBlockBestParentsResponse.displayName = 'proto.massa.api.v1.GetNextBlockBestParentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetOperationsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetOperationsRequest.displayName = 'proto.massa.api.v1.GetOperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetOperationsResponse.displayName = 'proto.massa.api.v1.GetOperationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetScExecutionEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetScExecutionEventsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetScExecutionEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetScExecutionEventsRequest.displayName = 'proto.massa.api.v1.GetScExecutionEventsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ScExecutionEventsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.ScExecutionEventsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ScExecutionEventsFilter.displayName = 'proto.massa.api.v1.ScExecutionEventsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetScExecutionEventsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetScExecutionEventsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetScExecutionEventsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetScExecutionEventsResponse.displayName = 'proto.massa.api.v1.GetScExecutionEventsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetStatusRequest.displayName = 'proto.massa.api.v1.GetStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetStatusResponse.displayName = 'proto.massa.api.v1.GetStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetSelectorDrawsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetSelectorDrawsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetSelectorDrawsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetSelectorDrawsRequest.displayName = 'proto.massa.api.v1.GetSelectorDrawsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SelectorDrawsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.SelectorDrawsFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.SelectorDrawsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SelectorDrawsFilter.displayName = 'proto.massa.api.v1.SelectorDrawsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetSelectorDrawsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetSelectorDrawsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetSelectorDrawsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetSelectorDrawsResponse.displayName = 'proto.massa.api.v1.GetSelectorDrawsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetStakersRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetStakersRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetStakersRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetStakersRequest.displayName = 'proto.massa.api.v1.GetStakersRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.StakersFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.StakersFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.StakersFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.StakersFilter.displayName = 'proto.massa.api.v1.StakersFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetStakersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.GetStakersResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.GetStakersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetStakersResponse.displayName = 'proto.massa.api.v1.GetStakersResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetTransactionsThroughputRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetTransactionsThroughputRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetTransactionsThroughputRequest.displayName = 'proto.massa.api.v1.GetTransactionsThroughputRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.GetTransactionsThroughputResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.GetTransactionsThroughputResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.GetTransactionsThroughputResponse.displayName = 'proto.massa.api.v1.GetTransactionsThroughputResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.QueryStateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.QueryStateRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.QueryStateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.QueryStateRequest.displayName = 'proto.massa.api.v1.QueryStateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutionQueryRequestItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.ExecutionQueryRequestItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutionQueryRequestItem.displayName = 'proto.massa.api.v1.ExecutionQueryRequestItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressExistsCandidate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressExistsCandidate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressExistsCandidate.displayName = 'proto.massa.api.v1.AddressExistsCandidate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressExistsFinal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressExistsFinal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressExistsFinal.displayName = 'proto.massa.api.v1.AddressExistsFinal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressBalanceCandidate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressBalanceCandidate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressBalanceCandidate.displayName = 'proto.massa.api.v1.AddressBalanceCandidate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressBalanceFinal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressBalanceFinal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressBalanceFinal.displayName = 'proto.massa.api.v1.AddressBalanceFinal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressBytecodeCandidate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressBytecodeCandidate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressBytecodeCandidate.displayName = 'proto.massa.api.v1.AddressBytecodeCandidate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressBytecodeFinal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressBytecodeFinal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressBytecodeFinal.displayName = 'proto.massa.api.v1.AddressBytecodeFinal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressDatastoreKeysCandidate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressDatastoreKeysCandidate.displayName = 'proto.massa.api.v1.AddressDatastoreKeysCandidate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressDatastoreKeysFinal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressDatastoreKeysFinal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressDatastoreKeysFinal.displayName = 'proto.massa.api.v1.AddressDatastoreKeysFinal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressDatastoreValueCandidate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressDatastoreValueCandidate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressDatastoreValueCandidate.displayName = 'proto.massa.api.v1.AddressDatastoreValueCandidate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressDatastoreValueFinal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressDatastoreValueFinal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressDatastoreValueFinal.displayName = 'proto.massa.api.v1.AddressDatastoreValueFinal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.OpExecutionStatusCandidate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.OpExecutionStatusCandidate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.OpExecutionStatusCandidate.displayName = 'proto.massa.api.v1.OpExecutionStatusCandidate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.OpExecutionStatusFinal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.OpExecutionStatusFinal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.OpExecutionStatusFinal.displayName = 'proto.massa.api.v1.OpExecutionStatusFinal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.DenunciationExecutionStatusCandidate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.DenunciationExecutionStatusCandidate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.DenunciationExecutionStatusCandidate.displayName = 'proto.massa.api.v1.DenunciationExecutionStatusCandidate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.DenunciationExecutionStatusFinal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.DenunciationExecutionStatusFinal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.DenunciationExecutionStatusFinal.displayName = 'proto.massa.api.v1.DenunciationExecutionStatusFinal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressRollsCandidate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressRollsCandidate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressRollsCandidate.displayName = 'proto.massa.api.v1.AddressRollsCandidate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressRollsFinal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressRollsFinal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressRollsFinal.displayName = 'proto.massa.api.v1.AddressRollsFinal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressDeferredCreditsCandidate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressDeferredCreditsCandidate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressDeferredCreditsCandidate.displayName = 'proto.massa.api.v1.AddressDeferredCreditsCandidate';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AddressDeferredCreditsFinal = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.AddressDeferredCreditsFinal, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AddressDeferredCreditsFinal.displayName = 'proto.massa.api.v1.AddressDeferredCreditsFinal';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.CycleInfos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.CycleInfos.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.CycleInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.CycleInfos.displayName = 'proto.massa.api.v1.CycleInfos';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.Events = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.Events.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.Events, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.Events.displayName = 'proto.massa.api.v1.Events';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.QueryStateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.QueryStateResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.QueryStateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.QueryStateResponse.displayName = 'proto.massa.api.v1.QueryStateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutionQueryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.ExecutionQueryResponse.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.ExecutionQueryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutionQueryResponse.displayName = 'proto.massa.api.v1.ExecutionQueryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutionQueryResponseItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.ExecutionQueryResponseItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutionQueryResponseItem.displayName = 'proto.massa.api.v1.ExecutionQueryResponseItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.DeferredCreditsEntryWrapper.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.DeferredCreditsEntryWrapper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.DeferredCreditsEntryWrapper.displayName = 'proto.massa.api.v1.DeferredCreditsEntryWrapper';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.DeferredCreditsEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.DeferredCreditsEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.DeferredCreditsEntry.displayName = 'proto.massa.api.v1.DeferredCreditsEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutionQueryCycleInfos = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.ExecutionQueryCycleInfos.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.ExecutionQueryCycleInfos, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutionQueryCycleInfos.displayName = 'proto.massa.api.v1.ExecutionQueryCycleInfos';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.ExecutionQueryStakerInfoEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutionQueryStakerInfoEntry.displayName = 'proto.massa.api.v1.ExecutionQueryStakerInfoEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutionQueryStakerInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.ExecutionQueryStakerInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutionQueryStakerInfo.displayName = 'proto.massa.api.v1.ExecutionQueryStakerInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.displayName = 'proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.displayName = 'proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ScOutputEventsWrapper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.ScOutputEventsWrapper.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.ScOutputEventsWrapper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ScOutputEventsWrapper.displayName = 'proto.massa.api.v1.ScOutputEventsWrapper';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.NewBlocksRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.NewBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewBlocksRequest.displayName = 'proto.massa.api.v1.NewBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewBlocksFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.NewBlocksFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.NewBlocksFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewBlocksFilter.displayName = 'proto.massa.api.v1.NewBlocksFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewBlocksResponse.displayName = 'proto.massa.api.v1.NewBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewEndorsementsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.NewEndorsementsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.NewEndorsementsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewEndorsementsRequest.displayName = 'proto.massa.api.v1.NewEndorsementsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewEndorsementsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.NewEndorsementsFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.NewEndorsementsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewEndorsementsFilter.displayName = 'proto.massa.api.v1.NewEndorsementsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewEndorsementsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewEndorsementsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewEndorsementsResponse.displayName = 'proto.massa.api.v1.NewEndorsementsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewFilledBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.NewFilledBlocksRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.NewFilledBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewFilledBlocksRequest.displayName = 'proto.massa.api.v1.NewFilledBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewFilledBlocksFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.NewFilledBlocksFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.NewFilledBlocksFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewFilledBlocksFilter.displayName = 'proto.massa.api.v1.NewFilledBlocksFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewFilledBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewFilledBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewFilledBlocksResponse.displayName = 'proto.massa.api.v1.NewFilledBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.NewOperationsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.NewOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewOperationsRequest.displayName = 'proto.massa.api.v1.NewOperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewOperationsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.NewOperationsFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.NewOperationsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewOperationsFilter.displayName = 'proto.massa.api.v1.NewOperationsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewOperationsResponse.displayName = 'proto.massa.api.v1.NewOperationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.NewSlotExecutionOutputsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.NewSlotExecutionOutputsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewSlotExecutionOutputsRequest.displayName = 'proto.massa.api.v1.NewSlotExecutionOutputsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.NewSlotExecutionOutputsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewSlotExecutionOutputsFilter.displayName = 'proto.massa.api.v1.NewSlotExecutionOutputsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.AsyncPoolChangesFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.AsyncPoolChangesFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.AsyncPoolChangesFilter.displayName = 'proto.massa.api.v1.AsyncPoolChangesFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.PosChangesFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.PosChangesFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.PosChangesFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.PosChangesFilter.displayName = 'proto.massa.api.v1.PosChangesFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutionEventFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.ExecutionEventFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutionEventFilter.displayName = 'proto.massa.api.v1.ExecutionEventFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutedOpsChangesFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.ExecutedOpsChangesFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.ExecutedOpsChangesFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutedOpsChangesFilter.displayName = 'proto.massa.api.v1.ExecutedOpsChangesFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.ExecutedDenounciationFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.ExecutedDenounciationFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.ExecutedDenounciationFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.ExecutedDenounciationFilter.displayName = 'proto.massa.api.v1.ExecutedDenounciationFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.LedgerChangesFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.LedgerChangesFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.LedgerChangesFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.LedgerChangesFilter.displayName = 'proto.massa.api.v1.LedgerChangesFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.NewSlotExecutionOutputsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.NewSlotExecutionOutputsResponse.displayName = 'proto.massa.api.v1.NewSlotExecutionOutputsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.SendBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendBlocksRequest.displayName = 'proto.massa.api.v1.SendBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.SendBlocksResponse.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.SendBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendBlocksResponse.displayName = 'proto.massa.api.v1.SendBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendEndorsementsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SendEndorsementsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SendEndorsementsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendEndorsementsRequest.displayName = 'proto.massa.api.v1.SendEndorsementsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendEndorsementsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.SendEndorsementsResponse.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.SendEndorsementsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendEndorsementsResponse.displayName = 'proto.massa.api.v1.SendEndorsementsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SendOperationsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SendOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendOperationsRequest.displayName = 'proto.massa.api.v1.SendOperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SendOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.SendOperationsResponse.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.SendOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SendOperationsResponse.displayName = 'proto.massa.api.v1.SendOperationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.TransactionsThroughputRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.TransactionsThroughputRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.TransactionsThroughputRequest.displayName = 'proto.massa.api.v1.TransactionsThroughputRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.TransactionsThroughputResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.massa.api.v1.TransactionsThroughputResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.TransactionsThroughputResponse.displayName = 'proto.massa.api.v1.TransactionsThroughputResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SearchBlocksRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SearchBlocksRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SearchBlocksRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SearchBlocksRequest.displayName = 'proto.massa.api.v1.SearchBlocksRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SearchBlocksFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.SearchBlocksFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.SearchBlocksFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SearchBlocksFilter.displayName = 'proto.massa.api.v1.SearchBlocksFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SearchBlocksResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SearchBlocksResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SearchBlocksResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SearchBlocksResponse.displayName = 'proto.massa.api.v1.SearchBlocksResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SearchEndorsementsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SearchEndorsementsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SearchEndorsementsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SearchEndorsementsRequest.displayName = 'proto.massa.api.v1.SearchEndorsementsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SearchEndorsementsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.SearchEndorsementsFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.SearchEndorsementsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SearchEndorsementsFilter.displayName = 'proto.massa.api.v1.SearchEndorsementsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SearchEndorsementsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SearchEndorsementsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SearchEndorsementsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SearchEndorsementsResponse.displayName = 'proto.massa.api.v1.SearchEndorsementsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SearchOperationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SearchOperationsRequest.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SearchOperationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SearchOperationsRequest.displayName = 'proto.massa.api.v1.SearchOperationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SearchOperationsFilter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, proto.massa.api.v1.SearchOperationsFilter.oneofGroups_);
};
goog.inherits(proto.massa.api.v1.SearchOperationsFilter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SearchOperationsFilter.displayName = 'proto.massa.api.v1.SearchOperationsFilter';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.massa.api.v1.SearchOperationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.massa.api.v1.SearchOperationsResponse.repeatedFields_, null);
};
goog.inherits(proto.massa.api.v1.SearchOperationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.massa.api.v1.SearchOperationsResponse.displayName = 'proto.massa.api.v1.SearchOperationsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecuteReadOnlyCallRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecuteReadOnlyCallRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecuteReadOnlyCallRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecuteReadOnlyCallRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    call: (f = msg.getCall()) && massa_model_v1_execution_pb.ReadOnlyExecutionCall.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecuteReadOnlyCallRequest}
 */
proto.massa.api.v1.ExecuteReadOnlyCallRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecuteReadOnlyCallRequest;
  return proto.massa.api.v1.ExecuteReadOnlyCallRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecuteReadOnlyCallRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecuteReadOnlyCallRequest}
 */
proto.massa.api.v1.ExecuteReadOnlyCallRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_execution_pb.ReadOnlyExecutionCall;
      reader.readMessage(value,massa_model_v1_execution_pb.ReadOnlyExecutionCall.deserializeBinaryFromReader);
      msg.setCall(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecuteReadOnlyCallRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecuteReadOnlyCallRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecuteReadOnlyCallRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecuteReadOnlyCallRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCall();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_execution_pb.ReadOnlyExecutionCall.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.ReadOnlyExecutionCall call = 1;
 * @return {?proto.massa.model.v1.ReadOnlyExecutionCall}
 */
proto.massa.api.v1.ExecuteReadOnlyCallRequest.prototype.getCall = function() {
  return /** @type{?proto.massa.model.v1.ReadOnlyExecutionCall} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_execution_pb.ReadOnlyExecutionCall, 1));
};


/**
 * @param {?proto.massa.model.v1.ReadOnlyExecutionCall|undefined} value
 * @return {!proto.massa.api.v1.ExecuteReadOnlyCallRequest} returns this
*/
proto.massa.api.v1.ExecuteReadOnlyCallRequest.prototype.setCall = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecuteReadOnlyCallRequest} returns this
 */
proto.massa.api.v1.ExecuteReadOnlyCallRequest.prototype.clearCall = function() {
  return this.setCall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecuteReadOnlyCallRequest.prototype.hasCall = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecuteReadOnlyCallResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecuteReadOnlyCallResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecuteReadOnlyCallResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecuteReadOnlyCallResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    output: (f = msg.getOutput()) && massa_model_v1_execution_pb.ReadOnlyExecutionOutput.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecuteReadOnlyCallResponse}
 */
proto.massa.api.v1.ExecuteReadOnlyCallResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecuteReadOnlyCallResponse;
  return proto.massa.api.v1.ExecuteReadOnlyCallResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecuteReadOnlyCallResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecuteReadOnlyCallResponse}
 */
proto.massa.api.v1.ExecuteReadOnlyCallResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_execution_pb.ReadOnlyExecutionOutput;
      reader.readMessage(value,massa_model_v1_execution_pb.ReadOnlyExecutionOutput.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecuteReadOnlyCallResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecuteReadOnlyCallResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecuteReadOnlyCallResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecuteReadOnlyCallResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_execution_pb.ReadOnlyExecutionOutput.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.ReadOnlyExecutionOutput output = 1;
 * @return {?proto.massa.model.v1.ReadOnlyExecutionOutput}
 */
proto.massa.api.v1.ExecuteReadOnlyCallResponse.prototype.getOutput = function() {
  return /** @type{?proto.massa.model.v1.ReadOnlyExecutionOutput} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_execution_pb.ReadOnlyExecutionOutput, 1));
};


/**
 * @param {?proto.massa.model.v1.ReadOnlyExecutionOutput|undefined} value
 * @return {!proto.massa.api.v1.ExecuteReadOnlyCallResponse} returns this
*/
proto.massa.api.v1.ExecuteReadOnlyCallResponse.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecuteReadOnlyCallResponse} returns this
 */
proto.massa.api.v1.ExecuteReadOnlyCallResponse.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecuteReadOnlyCallResponse.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetBlocksRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetBlocksRequest}
 */
proto.massa.api.v1.GetBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetBlocksRequest;
  return proto.massa.api.v1.GetBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetBlocksRequest}
 */
proto.massa.api.v1.GetBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addBlockIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string block_ids = 1;
 * @return {!Array<string>}
 */
proto.massa.api.v1.GetBlocksRequest.prototype.getBlockIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.massa.api.v1.GetBlocksRequest} returns this
 */
proto.massa.api.v1.GetBlocksRequest.prototype.setBlockIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.GetBlocksRequest} returns this
 */
proto.massa.api.v1.GetBlocksRequest.prototype.addBlockIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetBlocksRequest} returns this
 */
proto.massa.api.v1.GetBlocksRequest.prototype.clearBlockIdsList = function() {
  return this.setBlockIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetBlocksResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    wrappedBlocksList: jspb.Message.toObjectList(msg.getWrappedBlocksList(),
    massa_model_v1_block_pb.BlockWrapper.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetBlocksResponse}
 */
proto.massa.api.v1.GetBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetBlocksResponse;
  return proto.massa.api.v1.GetBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetBlocksResponse}
 */
proto.massa.api.v1.GetBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_block_pb.BlockWrapper;
      reader.readMessage(value,massa_model_v1_block_pb.BlockWrapper.deserializeBinaryFromReader);
      msg.addWrappedBlocks(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWrappedBlocksList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_block_pb.BlockWrapper.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.BlockWrapper wrapped_blocks = 1;
 * @return {!Array<!proto.massa.model.v1.BlockWrapper>}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.getWrappedBlocksList = function() {
  return /** @type{!Array<!proto.massa.model.v1.BlockWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_block_pb.BlockWrapper, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.BlockWrapper>} value
 * @return {!proto.massa.api.v1.GetBlocksResponse} returns this
*/
proto.massa.api.v1.GetBlocksResponse.prototype.setWrappedBlocksList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.BlockWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.BlockWrapper}
 */
proto.massa.api.v1.GetBlocksResponse.prototype.addWrappedBlocks = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.BlockWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetBlocksResponse} returns this
 */
proto.massa.api.v1.GetBlocksResponse.prototype.clearWrappedBlocksList = function() {
  return this.setWrappedBlocksList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetDatastoreEntriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetDatastoreEntriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.GetDatastoreEntryFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesRequest}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetDatastoreEntriesRequest;
  return proto.massa.api.v1.GetDatastoreEntriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetDatastoreEntriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesRequest}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.GetDatastoreEntryFilter;
      reader.readMessage(value,proto.massa.api.v1.GetDatastoreEntryFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetDatastoreEntriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetDatastoreEntriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.GetDatastoreEntryFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated GetDatastoreEntryFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.GetDatastoreEntryFilter>}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.GetDatastoreEntryFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.GetDatastoreEntryFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.GetDatastoreEntryFilter>} value
 * @return {!proto.massa.api.v1.GetDatastoreEntriesRequest} returns this
*/
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.GetDatastoreEntryFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.GetDatastoreEntryFilter}
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.GetDatastoreEntryFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesRequest} returns this
 */
proto.massa.api.v1.GetDatastoreEntriesRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.GetDatastoreEntryFilter.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.massa.api.v1.GetDatastoreEntryFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  ADDRESS_KEY: 1
};

/**
 * @return {proto.massa.api.v1.GetDatastoreEntryFilter.FilterCase}
 */
proto.massa.api.v1.GetDatastoreEntryFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.GetDatastoreEntryFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.GetDatastoreEntryFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetDatastoreEntryFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetDatastoreEntryFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetDatastoreEntryFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetDatastoreEntryFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressKey: (f = msg.getAddressKey()) && massa_model_v1_datastore_pb.AddressKeyEntry.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetDatastoreEntryFilter}
 */
proto.massa.api.v1.GetDatastoreEntryFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetDatastoreEntryFilter;
  return proto.massa.api.v1.GetDatastoreEntryFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetDatastoreEntryFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetDatastoreEntryFilter}
 */
proto.massa.api.v1.GetDatastoreEntryFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_datastore_pb.AddressKeyEntry;
      reader.readMessage(value,massa_model_v1_datastore_pb.AddressKeyEntry.deserializeBinaryFromReader);
      msg.setAddressKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetDatastoreEntryFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetDatastoreEntryFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetDatastoreEntryFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetDatastoreEntryFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_datastore_pb.AddressKeyEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.AddressKeyEntry address_key = 1;
 * @return {?proto.massa.model.v1.AddressKeyEntry}
 */
proto.massa.api.v1.GetDatastoreEntryFilter.prototype.getAddressKey = function() {
  return /** @type{?proto.massa.model.v1.AddressKeyEntry} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_datastore_pb.AddressKeyEntry, 1));
};


/**
 * @param {?proto.massa.model.v1.AddressKeyEntry|undefined} value
 * @return {!proto.massa.api.v1.GetDatastoreEntryFilter} returns this
*/
proto.massa.api.v1.GetDatastoreEntryFilter.prototype.setAddressKey = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.GetDatastoreEntryFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetDatastoreEntryFilter} returns this
 */
proto.massa.api.v1.GetDatastoreEntryFilter.prototype.clearAddressKey = function() {
  return this.setAddressKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetDatastoreEntryFilter.prototype.hasAddressKey = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetDatastoreEntriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetDatastoreEntriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    datastoreEntriesList: jspb.Message.toObjectList(msg.getDatastoreEntriesList(),
    massa_model_v1_datastore_pb.DatastoreEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesResponse}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetDatastoreEntriesResponse;
  return proto.massa.api.v1.GetDatastoreEntriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetDatastoreEntriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesResponse}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_datastore_pb.DatastoreEntry;
      reader.readMessage(value,massa_model_v1_datastore_pb.DatastoreEntry.deserializeBinaryFromReader);
      msg.addDatastoreEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetDatastoreEntriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetDatastoreEntriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDatastoreEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_datastore_pb.DatastoreEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.DatastoreEntry datastore_entries = 1;
 * @return {!Array<!proto.massa.model.v1.DatastoreEntry>}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.getDatastoreEntriesList = function() {
  return /** @type{!Array<!proto.massa.model.v1.DatastoreEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_datastore_pb.DatastoreEntry, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.DatastoreEntry>} value
 * @return {!proto.massa.api.v1.GetDatastoreEntriesResponse} returns this
*/
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.setDatastoreEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.DatastoreEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.DatastoreEntry}
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.addDatastoreEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.DatastoreEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetDatastoreEntriesResponse} returns this
 */
proto.massa.api.v1.GetDatastoreEntriesResponse.prototype.clearDatastoreEntriesList = function() {
  return this.setDatastoreEntriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetEndorsementsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetEndorsementsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetEndorsementsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetEndorsementsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetEndorsementsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    endorsementIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetEndorsementsRequest}
 */
proto.massa.api.v1.GetEndorsementsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetEndorsementsRequest;
  return proto.massa.api.v1.GetEndorsementsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetEndorsementsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetEndorsementsRequest}
 */
proto.massa.api.v1.GetEndorsementsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addEndorsementIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetEndorsementsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetEndorsementsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetEndorsementsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetEndorsementsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndorsementIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string endorsement_ids = 1;
 * @return {!Array<string>}
 */
proto.massa.api.v1.GetEndorsementsRequest.prototype.getEndorsementIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.massa.api.v1.GetEndorsementsRequest} returns this
 */
proto.massa.api.v1.GetEndorsementsRequest.prototype.setEndorsementIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.GetEndorsementsRequest} returns this
 */
proto.massa.api.v1.GetEndorsementsRequest.prototype.addEndorsementIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetEndorsementsRequest} returns this
 */
proto.massa.api.v1.GetEndorsementsRequest.prototype.clearEndorsementIdsList = function() {
  return this.setEndorsementIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetEndorsementsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetEndorsementsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetEndorsementsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetEndorsementsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetEndorsementsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    wrappedEndorsementsList: jspb.Message.toObjectList(msg.getWrappedEndorsementsList(),
    massa_model_v1_endorsement_pb.EndorsementWrapper.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetEndorsementsResponse}
 */
proto.massa.api.v1.GetEndorsementsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetEndorsementsResponse;
  return proto.massa.api.v1.GetEndorsementsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetEndorsementsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetEndorsementsResponse}
 */
proto.massa.api.v1.GetEndorsementsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_endorsement_pb.EndorsementWrapper;
      reader.readMessage(value,massa_model_v1_endorsement_pb.EndorsementWrapper.deserializeBinaryFromReader);
      msg.addWrappedEndorsements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetEndorsementsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetEndorsementsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetEndorsementsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetEndorsementsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWrappedEndorsementsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_endorsement_pb.EndorsementWrapper.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.EndorsementWrapper wrapped_endorsements = 1;
 * @return {!Array<!proto.massa.model.v1.EndorsementWrapper>}
 */
proto.massa.api.v1.GetEndorsementsResponse.prototype.getWrappedEndorsementsList = function() {
  return /** @type{!Array<!proto.massa.model.v1.EndorsementWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_endorsement_pb.EndorsementWrapper, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.EndorsementWrapper>} value
 * @return {!proto.massa.api.v1.GetEndorsementsResponse} returns this
*/
proto.massa.api.v1.GetEndorsementsResponse.prototype.setWrappedEndorsementsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.EndorsementWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.EndorsementWrapper}
 */
proto.massa.api.v1.GetEndorsementsResponse.prototype.addWrappedEndorsements = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.EndorsementWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetEndorsementsResponse} returns this
 */
proto.massa.api.v1.GetEndorsementsResponse.prototype.clearWrappedEndorsementsList = function() {
  return this.setWrappedEndorsementsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetNextBlockBestParentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsRequest}
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetNextBlockBestParentsRequest;
  return proto.massa.api.v1.GetNextBlockBestParentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsRequest}
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetNextBlockBestParentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetNextBlockBestParentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetNextBlockBestParentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockParentsList: jspb.Message.toObjectList(msg.getBlockParentsList(),
    massa_model_v1_block_pb.BlockParent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsResponse}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetNextBlockBestParentsResponse;
  return proto.massa.api.v1.GetNextBlockBestParentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsResponse}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_block_pb.BlockParent;
      reader.readMessage(value,massa_model_v1_block_pb.BlockParent.deserializeBinaryFromReader);
      msg.addBlockParents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetNextBlockBestParentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetNextBlockBestParentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockParentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_block_pb.BlockParent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.BlockParent block_parents = 1;
 * @return {!Array<!proto.massa.model.v1.BlockParent>}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.getBlockParentsList = function() {
  return /** @type{!Array<!proto.massa.model.v1.BlockParent>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_block_pb.BlockParent, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.BlockParent>} value
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsResponse} returns this
*/
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.setBlockParentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.BlockParent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.BlockParent}
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.addBlockParents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.BlockParent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetNextBlockBestParentsResponse} returns this
 */
proto.massa.api.v1.GetNextBlockBestParentsResponse.prototype.clearBlockParentsList = function() {
  return this.setBlockParentsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetOperationsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationIdsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetOperationsRequest}
 */
proto.massa.api.v1.GetOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetOperationsRequest;
  return proto.massa.api.v1.GetOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetOperationsRequest}
 */
proto.massa.api.v1.GetOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addOperationIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string operation_ids = 1;
 * @return {!Array<string>}
 */
proto.massa.api.v1.GetOperationsRequest.prototype.getOperationIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.massa.api.v1.GetOperationsRequest} returns this
 */
proto.massa.api.v1.GetOperationsRequest.prototype.setOperationIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.GetOperationsRequest} returns this
 */
proto.massa.api.v1.GetOperationsRequest.prototype.addOperationIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetOperationsRequest} returns this
 */
proto.massa.api.v1.GetOperationsRequest.prototype.clearOperationIdsList = function() {
  return this.setOperationIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetOperationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    wrappedOperationsList: jspb.Message.toObjectList(msg.getWrappedOperationsList(),
    massa_model_v1_operation_pb.OperationWrapper.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetOperationsResponse}
 */
proto.massa.api.v1.GetOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetOperationsResponse;
  return proto.massa.api.v1.GetOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetOperationsResponse}
 */
proto.massa.api.v1.GetOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_operation_pb.OperationWrapper;
      reader.readMessage(value,massa_model_v1_operation_pb.OperationWrapper.deserializeBinaryFromReader);
      msg.addWrappedOperations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWrappedOperationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_operation_pb.OperationWrapper.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.OperationWrapper wrapped_operations = 1;
 * @return {!Array<!proto.massa.model.v1.OperationWrapper>}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.getWrappedOperationsList = function() {
  return /** @type{!Array<!proto.massa.model.v1.OperationWrapper>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_operation_pb.OperationWrapper, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.OperationWrapper>} value
 * @return {!proto.massa.api.v1.GetOperationsResponse} returns this
*/
proto.massa.api.v1.GetOperationsResponse.prototype.setWrappedOperationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.OperationWrapper=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.OperationWrapper}
 */
proto.massa.api.v1.GetOperationsResponse.prototype.addWrappedOperations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.OperationWrapper, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetOperationsResponse} returns this
 */
proto.massa.api.v1.GetOperationsResponse.prototype.clearWrappedOperationsList = function() {
  return this.setWrappedOperationsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetScExecutionEventsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetScExecutionEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetScExecutionEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.ScExecutionEventsFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetScExecutionEventsRequest}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetScExecutionEventsRequest;
  return proto.massa.api.v1.GetScExecutionEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetScExecutionEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetScExecutionEventsRequest}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.ScExecutionEventsFilter;
      reader.readMessage(value,proto.massa.api.v1.ScExecutionEventsFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetScExecutionEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetScExecutionEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.ScExecutionEventsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ScExecutionEventsFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.ScExecutionEventsFilter>}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.ScExecutionEventsFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.ScExecutionEventsFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.ScExecutionEventsFilter>} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsRequest} returns this
*/
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.ScExecutionEventsFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter}
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.ScExecutionEventsFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetScExecutionEventsRequest} returns this
 */
proto.massa.api.v1.GetScExecutionEventsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.massa.api.v1.ScExecutionEventsFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  SLOT_RANGE: 1,
  CALLER_ADDRESS: 2,
  EMITTER_ADDRESS: 3,
  ORIGINAL_OPERATION_ID: 4,
  IS_FAILURE: 5,
  STATUS: 6
};

/**
 * @return {proto.massa.api.v1.ScExecutionEventsFilter.FilterCase}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.ScExecutionEventsFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ScExecutionEventsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ScExecutionEventsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ScExecutionEventsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    slotRange: (f = msg.getSlotRange()) && massa_model_v1_slot_pb.SlotRange.toObject(includeInstance, f),
    callerAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    emitterAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    originalOperationId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isFailure: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    status: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter}
 */
proto.massa.api.v1.ScExecutionEventsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ScExecutionEventsFilter;
  return proto.massa.api.v1.ScExecutionEventsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ScExecutionEventsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter}
 */
proto.massa.api.v1.ScExecutionEventsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_slot_pb.SlotRange;
      reader.readMessage(value,massa_model_v1_slot_pb.SlotRange.deserializeBinaryFromReader);
      msg.setSlotRange(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmitterAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalOperationId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFailure(value);
      break;
    case 6:
      var value = /** @type {!proto.massa.model.v1.ScExecutionEventStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ScExecutionEventsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ScExecutionEventsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ScExecutionEventsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlotRange();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_slot_pb.SlotRange.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {!proto.massa.model.v1.ScExecutionEventStatus} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * optional massa.model.v1.SlotRange slot_range = 1;
 * @return {?proto.massa.model.v1.SlotRange}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.getSlotRange = function() {
  return /** @type{?proto.massa.model.v1.SlotRange} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_slot_pb.SlotRange, 1));
};


/**
 * @param {?proto.massa.model.v1.SlotRange|undefined} value
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
*/
proto.massa.api.v1.ScExecutionEventsFilter.prototype.setSlotRange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.clearSlotRange = function() {
  return this.setSlotRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.hasSlotRange = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string caller_address = 2;
 * @return {string}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.getCallerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.setCallerAddress = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.clearCallerAddress = function() {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.hasCallerAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string emitter_address = 3;
 * @return {string}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.getEmitterAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.setEmitterAddress = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.clearEmitterAddress = function() {
  return jspb.Message.setOneofField(this, 3, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.hasEmitterAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string original_operation_id = 4;
 * @return {string}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.getOriginalOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.setOriginalOperationId = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.clearOriginalOperationId = function() {
  return jspb.Message.setOneofField(this, 4, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.hasOriginalOperationId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_failure = 5;
 * @return {boolean}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.getIsFailure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.setIsFailure = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.clearIsFailure = function() {
  return jspb.Message.setOneofField(this, 5, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.hasIsFailure = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional massa.model.v1.ScExecutionEventStatus status = 6;
 * @return {!proto.massa.model.v1.ScExecutionEventStatus}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.getStatus = function() {
  return /** @type {!proto.massa.model.v1.ScExecutionEventStatus} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.massa.model.v1.ScExecutionEventStatus} value
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.setStatus = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter} returns this
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.clearStatus = function() {
  return jspb.Message.setOneofField(this, 6, proto.massa.api.v1.ScExecutionEventsFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ScExecutionEventsFilter.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetScExecutionEventsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetScExecutionEventsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetScExecutionEventsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    massa_model_v1_execution_pb.ScExecutionEvent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetScExecutionEventsResponse;
  return proto.massa.api.v1.GetScExecutionEventsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetScExecutionEventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_execution_pb.ScExecutionEvent;
      reader.readMessage(value,massa_model_v1_execution_pb.ScExecutionEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetScExecutionEventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetScExecutionEventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetScExecutionEventsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_execution_pb.ScExecutionEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.ScExecutionEvent events = 1;
 * @return {!Array<!proto.massa.model.v1.ScExecutionEvent>}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.massa.model.v1.ScExecutionEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_execution_pb.ScExecutionEvent, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.ScExecutionEvent>} value
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse} returns this
*/
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.ScExecutionEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.ScExecutionEvent}
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.ScExecutionEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetScExecutionEventsResponse} returns this
 */
proto.massa.api.v1.GetScExecutionEventsResponse.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetStatusRequest}
 */
proto.massa.api.v1.GetStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetStatusRequest;
  return proto.massa.api.v1.GetStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetStatusRequest}
 */
proto.massa.api.v1.GetStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: (f = msg.getStatus()) && massa_model_v1_node_pb.PublicStatus.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetStatusResponse}
 */
proto.massa.api.v1.GetStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetStatusResponse;
  return proto.massa.api.v1.GetStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetStatusResponse}
 */
proto.massa.api.v1.GetStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_node_pb.PublicStatus;
      reader.readMessage(value,massa_model_v1_node_pb.PublicStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_node_pb.PublicStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.PublicStatus status = 1;
 * @return {?proto.massa.model.v1.PublicStatus}
 */
proto.massa.api.v1.GetStatusResponse.prototype.getStatus = function() {
  return /** @type{?proto.massa.model.v1.PublicStatus} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_node_pb.PublicStatus, 1));
};


/**
 * @param {?proto.massa.model.v1.PublicStatus|undefined} value
 * @return {!proto.massa.api.v1.GetStatusResponse} returns this
*/
proto.massa.api.v1.GetStatusResponse.prototype.setStatus = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.GetStatusResponse} returns this
 */
proto.massa.api.v1.GetStatusResponse.prototype.clearStatus = function() {
  return this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.GetStatusResponse.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetSelectorDrawsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetSelectorDrawsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetSelectorDrawsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetSelectorDrawsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.SelectorDrawsFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetSelectorDrawsRequest}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetSelectorDrawsRequest;
  return proto.massa.api.v1.GetSelectorDrawsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetSelectorDrawsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetSelectorDrawsRequest}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.SelectorDrawsFilter;
      reader.readMessage(value,proto.massa.api.v1.SelectorDrawsFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetSelectorDrawsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetSelectorDrawsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetSelectorDrawsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.SelectorDrawsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SelectorDrawsFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.SelectorDrawsFilter>}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.SelectorDrawsFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.SelectorDrawsFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.SelectorDrawsFilter>} value
 * @return {!proto.massa.api.v1.GetSelectorDrawsRequest} returns this
*/
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.SelectorDrawsFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.SelectorDrawsFilter}
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.SelectorDrawsFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetSelectorDrawsRequest} returns this
 */
proto.massa.api.v1.GetSelectorDrawsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.SelectorDrawsFilter.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.massa.api.v1.SelectorDrawsFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  ADDRESSES: 1,
  SLOT_RANGE: 2
};

/**
 * @return {proto.massa.api.v1.SelectorDrawsFilter.FilterCase}
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.SelectorDrawsFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.SelectorDrawsFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SelectorDrawsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SelectorDrawsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SelectorDrawsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    addresses: (f = msg.getAddresses()) && massa_model_v1_address_pb.Addresses.toObject(includeInstance, f),
    slotRange: (f = msg.getSlotRange()) && massa_model_v1_slot_pb.SlotRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SelectorDrawsFilter}
 */
proto.massa.api.v1.SelectorDrawsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SelectorDrawsFilter;
  return proto.massa.api.v1.SelectorDrawsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SelectorDrawsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SelectorDrawsFilter}
 */
proto.massa.api.v1.SelectorDrawsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_address_pb.Addresses;
      reader.readMessage(value,massa_model_v1_address_pb.Addresses.deserializeBinaryFromReader);
      msg.setAddresses(value);
      break;
    case 2:
      var value = new massa_model_v1_slot_pb.SlotRange;
      reader.readMessage(value,massa_model_v1_slot_pb.SlotRange.deserializeBinaryFromReader);
      msg.setSlotRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SelectorDrawsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SelectorDrawsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SelectorDrawsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddresses();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_address_pb.Addresses.serializeBinaryToWriter
    );
  }
  f = message.getSlotRange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_slot_pb.SlotRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.Addresses addresses = 1;
 * @return {?proto.massa.model.v1.Addresses}
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.getAddresses = function() {
  return /** @type{?proto.massa.model.v1.Addresses} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_address_pb.Addresses, 1));
};


/**
 * @param {?proto.massa.model.v1.Addresses|undefined} value
 * @return {!proto.massa.api.v1.SelectorDrawsFilter} returns this
*/
proto.massa.api.v1.SelectorDrawsFilter.prototype.setAddresses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.SelectorDrawsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SelectorDrawsFilter} returns this
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.clearAddresses = function() {
  return this.setAddresses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.hasAddresses = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.SlotRange slot_range = 2;
 * @return {?proto.massa.model.v1.SlotRange}
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.getSlotRange = function() {
  return /** @type{?proto.massa.model.v1.SlotRange} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_slot_pb.SlotRange, 2));
};


/**
 * @param {?proto.massa.model.v1.SlotRange|undefined} value
 * @return {!proto.massa.api.v1.SelectorDrawsFilter} returns this
*/
proto.massa.api.v1.SelectorDrawsFilter.prototype.setSlotRange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.SelectorDrawsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SelectorDrawsFilter} returns this
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.clearSlotRange = function() {
  return this.setSlotRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SelectorDrawsFilter.prototype.hasSlotRange = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetSelectorDrawsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetSelectorDrawsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetSelectorDrawsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetSelectorDrawsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    drawsList: jspb.Message.toObjectList(msg.getDrawsList(),
    massa_model_v1_draw_pb.SlotDraw.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetSelectorDrawsResponse}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetSelectorDrawsResponse;
  return proto.massa.api.v1.GetSelectorDrawsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetSelectorDrawsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetSelectorDrawsResponse}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_draw_pb.SlotDraw;
      reader.readMessage(value,massa_model_v1_draw_pb.SlotDraw.deserializeBinaryFromReader);
      msg.addDraws(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetSelectorDrawsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetSelectorDrawsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetSelectorDrawsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDrawsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_draw_pb.SlotDraw.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.SlotDraw draws = 1;
 * @return {!Array<!proto.massa.model.v1.SlotDraw>}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.getDrawsList = function() {
  return /** @type{!Array<!proto.massa.model.v1.SlotDraw>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_draw_pb.SlotDraw, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.SlotDraw>} value
 * @return {!proto.massa.api.v1.GetSelectorDrawsResponse} returns this
*/
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.setDrawsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.SlotDraw=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.SlotDraw}
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.addDraws = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.SlotDraw, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetSelectorDrawsResponse} returns this
 */
proto.massa.api.v1.GetSelectorDrawsResponse.prototype.clearDrawsList = function() {
  return this.setDrawsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetStakersRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetStakersRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetStakersRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetStakersRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetStakersRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.StakersFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetStakersRequest}
 */
proto.massa.api.v1.GetStakersRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetStakersRequest;
  return proto.massa.api.v1.GetStakersRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetStakersRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetStakersRequest}
 */
proto.massa.api.v1.GetStakersRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.StakersFilter;
      reader.readMessage(value,proto.massa.api.v1.StakersFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetStakersRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetStakersRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetStakersRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetStakersRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.StakersFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated StakersFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.StakersFilter>}
 */
proto.massa.api.v1.GetStakersRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.StakersFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.StakersFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.StakersFilter>} value
 * @return {!proto.massa.api.v1.GetStakersRequest} returns this
*/
proto.massa.api.v1.GetStakersRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.StakersFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.StakersFilter}
 */
proto.massa.api.v1.GetStakersRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.StakersFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetStakersRequest} returns this
 */
proto.massa.api.v1.GetStakersRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.StakersFilter.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.massa.api.v1.StakersFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  MIN_ROLLS: 1,
  MAX_ROLLS: 2,
  LIMIT: 3
};

/**
 * @return {proto.massa.api.v1.StakersFilter.FilterCase}
 */
proto.massa.api.v1.StakersFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.StakersFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.StakersFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.StakersFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.StakersFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.StakersFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.StakersFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    minRolls: jspb.Message.getFieldWithDefault(msg, 1, 0),
    maxRolls: jspb.Message.getFieldWithDefault(msg, 2, 0),
    limit: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.StakersFilter}
 */
proto.massa.api.v1.StakersFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.StakersFilter;
  return proto.massa.api.v1.StakersFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.StakersFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.StakersFilter}
 */
proto.massa.api.v1.StakersFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMinRolls(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setMaxRolls(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLimit(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.StakersFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.StakersFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.StakersFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.StakersFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeUint64(
      3,
      f
    );
  }
};


/**
 * optional uint64 min_rolls = 1;
 * @return {number}
 */
proto.massa.api.v1.StakersFilter.prototype.getMinRolls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.StakersFilter} returns this
 */
proto.massa.api.v1.StakersFilter.prototype.setMinRolls = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.massa.api.v1.StakersFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.StakersFilter} returns this
 */
proto.massa.api.v1.StakersFilter.prototype.clearMinRolls = function() {
  return jspb.Message.setOneofField(this, 1, proto.massa.api.v1.StakersFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.StakersFilter.prototype.hasMinRolls = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 max_rolls = 2;
 * @return {number}
 */
proto.massa.api.v1.StakersFilter.prototype.getMaxRolls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.StakersFilter} returns this
 */
proto.massa.api.v1.StakersFilter.prototype.setMaxRolls = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.StakersFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.StakersFilter} returns this
 */
proto.massa.api.v1.StakersFilter.prototype.clearMaxRolls = function() {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.StakersFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.StakersFilter.prototype.hasMaxRolls = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional uint64 limit = 3;
 * @return {number}
 */
proto.massa.api.v1.StakersFilter.prototype.getLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.StakersFilter} returns this
 */
proto.massa.api.v1.StakersFilter.prototype.setLimit = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.massa.api.v1.StakersFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.StakersFilter} returns this
 */
proto.massa.api.v1.StakersFilter.prototype.clearLimit = function() {
  return jspb.Message.setOneofField(this, 3, proto.massa.api.v1.StakersFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.StakersFilter.prototype.hasLimit = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.GetStakersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetStakersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetStakersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetStakersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetStakersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    stakersList: jspb.Message.toObjectList(msg.getStakersList(),
    massa_model_v1_staker_pb.StakerEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetStakersResponse}
 */
proto.massa.api.v1.GetStakersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetStakersResponse;
  return proto.massa.api.v1.GetStakersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetStakersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetStakersResponse}
 */
proto.massa.api.v1.GetStakersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_staker_pb.StakerEntry;
      reader.readMessage(value,massa_model_v1_staker_pb.StakerEntry.deserializeBinaryFromReader);
      msg.addStakers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetStakersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetStakersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetStakersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetStakersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStakersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_staker_pb.StakerEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.StakerEntry stakers = 1;
 * @return {!Array<!proto.massa.model.v1.StakerEntry>}
 */
proto.massa.api.v1.GetStakersResponse.prototype.getStakersList = function() {
  return /** @type{!Array<!proto.massa.model.v1.StakerEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_staker_pb.StakerEntry, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.StakerEntry>} value
 * @return {!proto.massa.api.v1.GetStakersResponse} returns this
*/
proto.massa.api.v1.GetStakersResponse.prototype.setStakersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.StakerEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.StakerEntry}
 */
proto.massa.api.v1.GetStakersResponse.prototype.addStakers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.StakerEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.GetStakersResponse} returns this
 */
proto.massa.api.v1.GetStakersResponse.prototype.clearStakersList = function() {
  return this.setStakersList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetTransactionsThroughputRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetTransactionsThroughputRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetTransactionsThroughputRequest}
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetTransactionsThroughputRequest;
  return proto.massa.api.v1.GetTransactionsThroughputRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetTransactionsThroughputRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetTransactionsThroughputRequest}
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetTransactionsThroughputRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetTransactionsThroughputRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetTransactionsThroughputRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.GetTransactionsThroughputResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.GetTransactionsThroughputResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    throughput: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.GetTransactionsThroughputResponse}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.GetTransactionsThroughputResponse;
  return proto.massa.api.v1.GetTransactionsThroughputResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.GetTransactionsThroughputResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.GetTransactionsThroughputResponse}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setThroughput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.GetTransactionsThroughputResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.GetTransactionsThroughputResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThroughput();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 throughput = 1;
 * @return {number}
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.prototype.getThroughput = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.GetTransactionsThroughputResponse} returns this
 */
proto.massa.api.v1.GetTransactionsThroughputResponse.prototype.setThroughput = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.QueryStateRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.QueryStateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.QueryStateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.QueryStateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.QueryStateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    queriesList: jspb.Message.toObjectList(msg.getQueriesList(),
    proto.massa.api.v1.ExecutionQueryRequestItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.QueryStateRequest}
 */
proto.massa.api.v1.QueryStateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.QueryStateRequest;
  return proto.massa.api.v1.QueryStateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.QueryStateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.QueryStateRequest}
 */
proto.massa.api.v1.QueryStateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.ExecutionQueryRequestItem;
      reader.readMessage(value,proto.massa.api.v1.ExecutionQueryRequestItem.deserializeBinaryFromReader);
      msg.addQueries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.QueryStateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.QueryStateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.QueryStateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.QueryStateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getQueriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.ExecutionQueryRequestItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ExecutionQueryRequestItem queries = 1;
 * @return {!Array<!proto.massa.api.v1.ExecutionQueryRequestItem>}
 */
proto.massa.api.v1.QueryStateRequest.prototype.getQueriesList = function() {
  return /** @type{!Array<!proto.massa.api.v1.ExecutionQueryRequestItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.ExecutionQueryRequestItem, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.ExecutionQueryRequestItem>} value
 * @return {!proto.massa.api.v1.QueryStateRequest} returns this
*/
proto.massa.api.v1.QueryStateRequest.prototype.setQueriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.ExecutionQueryRequestItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem}
 */
proto.massa.api.v1.QueryStateRequest.prototype.addQueries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.ExecutionQueryRequestItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.QueryStateRequest} returns this
 */
proto.massa.api.v1.QueryStateRequest.prototype.clearQueriesList = function() {
  return this.setQueriesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_ = [[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]];

/**
 * @enum {number}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.RequestItemCase = {
  REQUEST_ITEM_NOT_SET: 0,
  ADDRESS_EXISTS_CANDIDATE: 1,
  ADDRESS_EXISTS_FINAL: 2,
  ADDRESS_BALANCE_CANDIDATE: 3,
  ADDRESS_BALANCE_FINAL: 4,
  ADDRESS_BYTECODE_CANDIDATE: 5,
  ADDRESS_BYTECODE_FINAL: 6,
  ADDRESS_DATASTORE_KEYS_CANDIDATE: 7,
  ADDRESS_DATASTORE_KEYS_FINAL: 8,
  ADDRESS_DATASTORE_VALUE_CANDIDATE: 9,
  ADDRESS_DATASTORE_VALUE_FINAL: 10,
  OP_EXECUTION_STATUS_CANDIDATE: 11,
  OP_EXECUTION_STATUS_FINAL: 12,
  DENUNCIATION_EXECUTION_STATUS_CANDIDATE: 13,
  DENUNCIATION_EXECUTION_STATUS_FINAL: 14,
  ADDRESS_ROLLS_CANDIDATE: 15,
  ADDRESS_ROLLS_FINAL: 16,
  ADDRESS_DEFERRED_CREDITS_CANDIDATE: 17,
  ADDRESS_DEFERRED_CREDITS_FINAL: 18,
  CYCLE_INFOS: 19,
  EVENTS: 20
};

/**
 * @return {proto.massa.api.v1.ExecutionQueryRequestItem.RequestItemCase}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getRequestItemCase = function() {
  return /** @type {proto.massa.api.v1.ExecutionQueryRequestItem.RequestItemCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutionQueryRequestItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutionQueryRequestItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryRequestItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    addressExistsCandidate: (f = msg.getAddressExistsCandidate()) && proto.massa.api.v1.AddressExistsCandidate.toObject(includeInstance, f),
    addressExistsFinal: (f = msg.getAddressExistsFinal()) && proto.massa.api.v1.AddressExistsFinal.toObject(includeInstance, f),
    addressBalanceCandidate: (f = msg.getAddressBalanceCandidate()) && proto.massa.api.v1.AddressBalanceCandidate.toObject(includeInstance, f),
    addressBalanceFinal: (f = msg.getAddressBalanceFinal()) && proto.massa.api.v1.AddressBalanceFinal.toObject(includeInstance, f),
    addressBytecodeCandidate: (f = msg.getAddressBytecodeCandidate()) && proto.massa.api.v1.AddressBytecodeCandidate.toObject(includeInstance, f),
    addressBytecodeFinal: (f = msg.getAddressBytecodeFinal()) && proto.massa.api.v1.AddressBytecodeFinal.toObject(includeInstance, f),
    addressDatastoreKeysCandidate: (f = msg.getAddressDatastoreKeysCandidate()) && proto.massa.api.v1.AddressDatastoreKeysCandidate.toObject(includeInstance, f),
    addressDatastoreKeysFinal: (f = msg.getAddressDatastoreKeysFinal()) && proto.massa.api.v1.AddressDatastoreKeysFinal.toObject(includeInstance, f),
    addressDatastoreValueCandidate: (f = msg.getAddressDatastoreValueCandidate()) && proto.massa.api.v1.AddressDatastoreValueCandidate.toObject(includeInstance, f),
    addressDatastoreValueFinal: (f = msg.getAddressDatastoreValueFinal()) && proto.massa.api.v1.AddressDatastoreValueFinal.toObject(includeInstance, f),
    opExecutionStatusCandidate: (f = msg.getOpExecutionStatusCandidate()) && proto.massa.api.v1.OpExecutionStatusCandidate.toObject(includeInstance, f),
    opExecutionStatusFinal: (f = msg.getOpExecutionStatusFinal()) && proto.massa.api.v1.OpExecutionStatusFinal.toObject(includeInstance, f),
    denunciationExecutionStatusCandidate: (f = msg.getDenunciationExecutionStatusCandidate()) && proto.massa.api.v1.DenunciationExecutionStatusCandidate.toObject(includeInstance, f),
    denunciationExecutionStatusFinal: (f = msg.getDenunciationExecutionStatusFinal()) && proto.massa.api.v1.DenunciationExecutionStatusFinal.toObject(includeInstance, f),
    addressRollsCandidate: (f = msg.getAddressRollsCandidate()) && proto.massa.api.v1.AddressRollsCandidate.toObject(includeInstance, f),
    addressRollsFinal: (f = msg.getAddressRollsFinal()) && proto.massa.api.v1.AddressRollsFinal.toObject(includeInstance, f),
    addressDeferredCreditsCandidate: (f = msg.getAddressDeferredCreditsCandidate()) && proto.massa.api.v1.AddressDeferredCreditsCandidate.toObject(includeInstance, f),
    addressDeferredCreditsFinal: (f = msg.getAddressDeferredCreditsFinal()) && proto.massa.api.v1.AddressDeferredCreditsFinal.toObject(includeInstance, f),
    cycleInfos: (f = msg.getCycleInfos()) && proto.massa.api.v1.CycleInfos.toObject(includeInstance, f),
    events: (f = msg.getEvents()) && proto.massa.api.v1.Events.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutionQueryRequestItem;
  return proto.massa.api.v1.ExecutionQueryRequestItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutionQueryRequestItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.AddressExistsCandidate;
      reader.readMessage(value,proto.massa.api.v1.AddressExistsCandidate.deserializeBinaryFromReader);
      msg.setAddressExistsCandidate(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.AddressExistsFinal;
      reader.readMessage(value,proto.massa.api.v1.AddressExistsFinal.deserializeBinaryFromReader);
      msg.setAddressExistsFinal(value);
      break;
    case 3:
      var value = new proto.massa.api.v1.AddressBalanceCandidate;
      reader.readMessage(value,proto.massa.api.v1.AddressBalanceCandidate.deserializeBinaryFromReader);
      msg.setAddressBalanceCandidate(value);
      break;
    case 4:
      var value = new proto.massa.api.v1.AddressBalanceFinal;
      reader.readMessage(value,proto.massa.api.v1.AddressBalanceFinal.deserializeBinaryFromReader);
      msg.setAddressBalanceFinal(value);
      break;
    case 5:
      var value = new proto.massa.api.v1.AddressBytecodeCandidate;
      reader.readMessage(value,proto.massa.api.v1.AddressBytecodeCandidate.deserializeBinaryFromReader);
      msg.setAddressBytecodeCandidate(value);
      break;
    case 6:
      var value = new proto.massa.api.v1.AddressBytecodeFinal;
      reader.readMessage(value,proto.massa.api.v1.AddressBytecodeFinal.deserializeBinaryFromReader);
      msg.setAddressBytecodeFinal(value);
      break;
    case 7:
      var value = new proto.massa.api.v1.AddressDatastoreKeysCandidate;
      reader.readMessage(value,proto.massa.api.v1.AddressDatastoreKeysCandidate.deserializeBinaryFromReader);
      msg.setAddressDatastoreKeysCandidate(value);
      break;
    case 8:
      var value = new proto.massa.api.v1.AddressDatastoreKeysFinal;
      reader.readMessage(value,proto.massa.api.v1.AddressDatastoreKeysFinal.deserializeBinaryFromReader);
      msg.setAddressDatastoreKeysFinal(value);
      break;
    case 9:
      var value = new proto.massa.api.v1.AddressDatastoreValueCandidate;
      reader.readMessage(value,proto.massa.api.v1.AddressDatastoreValueCandidate.deserializeBinaryFromReader);
      msg.setAddressDatastoreValueCandidate(value);
      break;
    case 10:
      var value = new proto.massa.api.v1.AddressDatastoreValueFinal;
      reader.readMessage(value,proto.massa.api.v1.AddressDatastoreValueFinal.deserializeBinaryFromReader);
      msg.setAddressDatastoreValueFinal(value);
      break;
    case 11:
      var value = new proto.massa.api.v1.OpExecutionStatusCandidate;
      reader.readMessage(value,proto.massa.api.v1.OpExecutionStatusCandidate.deserializeBinaryFromReader);
      msg.setOpExecutionStatusCandidate(value);
      break;
    case 12:
      var value = new proto.massa.api.v1.OpExecutionStatusFinal;
      reader.readMessage(value,proto.massa.api.v1.OpExecutionStatusFinal.deserializeBinaryFromReader);
      msg.setOpExecutionStatusFinal(value);
      break;
    case 13:
      var value = new proto.massa.api.v1.DenunciationExecutionStatusCandidate;
      reader.readMessage(value,proto.massa.api.v1.DenunciationExecutionStatusCandidate.deserializeBinaryFromReader);
      msg.setDenunciationExecutionStatusCandidate(value);
      break;
    case 14:
      var value = new proto.massa.api.v1.DenunciationExecutionStatusFinal;
      reader.readMessage(value,proto.massa.api.v1.DenunciationExecutionStatusFinal.deserializeBinaryFromReader);
      msg.setDenunciationExecutionStatusFinal(value);
      break;
    case 15:
      var value = new proto.massa.api.v1.AddressRollsCandidate;
      reader.readMessage(value,proto.massa.api.v1.AddressRollsCandidate.deserializeBinaryFromReader);
      msg.setAddressRollsCandidate(value);
      break;
    case 16:
      var value = new proto.massa.api.v1.AddressRollsFinal;
      reader.readMessage(value,proto.massa.api.v1.AddressRollsFinal.deserializeBinaryFromReader);
      msg.setAddressRollsFinal(value);
      break;
    case 17:
      var value = new proto.massa.api.v1.AddressDeferredCreditsCandidate;
      reader.readMessage(value,proto.massa.api.v1.AddressDeferredCreditsCandidate.deserializeBinaryFromReader);
      msg.setAddressDeferredCreditsCandidate(value);
      break;
    case 18:
      var value = new proto.massa.api.v1.AddressDeferredCreditsFinal;
      reader.readMessage(value,proto.massa.api.v1.AddressDeferredCreditsFinal.deserializeBinaryFromReader);
      msg.setAddressDeferredCreditsFinal(value);
      break;
    case 19:
      var value = new proto.massa.api.v1.CycleInfos;
      reader.readMessage(value,proto.massa.api.v1.CycleInfos.deserializeBinaryFromReader);
      msg.setCycleInfos(value);
      break;
    case 20:
      var value = new proto.massa.api.v1.Events;
      reader.readMessage(value,proto.massa.api.v1.Events.deserializeBinaryFromReader);
      msg.setEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutionQueryRequestItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutionQueryRequestItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryRequestItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddressExistsCandidate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.massa.api.v1.AddressExistsCandidate.serializeBinaryToWriter
    );
  }
  f = message.getAddressExistsFinal();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.AddressExistsFinal.serializeBinaryToWriter
    );
  }
  f = message.getAddressBalanceCandidate();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.massa.api.v1.AddressBalanceCandidate.serializeBinaryToWriter
    );
  }
  f = message.getAddressBalanceFinal();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.massa.api.v1.AddressBalanceFinal.serializeBinaryToWriter
    );
  }
  f = message.getAddressBytecodeCandidate();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.massa.api.v1.AddressBytecodeCandidate.serializeBinaryToWriter
    );
  }
  f = message.getAddressBytecodeFinal();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.massa.api.v1.AddressBytecodeFinal.serializeBinaryToWriter
    );
  }
  f = message.getAddressDatastoreKeysCandidate();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.massa.api.v1.AddressDatastoreKeysCandidate.serializeBinaryToWriter
    );
  }
  f = message.getAddressDatastoreKeysFinal();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.massa.api.v1.AddressDatastoreKeysFinal.serializeBinaryToWriter
    );
  }
  f = message.getAddressDatastoreValueCandidate();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.massa.api.v1.AddressDatastoreValueCandidate.serializeBinaryToWriter
    );
  }
  f = message.getAddressDatastoreValueFinal();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.massa.api.v1.AddressDatastoreValueFinal.serializeBinaryToWriter
    );
  }
  f = message.getOpExecutionStatusCandidate();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.massa.api.v1.OpExecutionStatusCandidate.serializeBinaryToWriter
    );
  }
  f = message.getOpExecutionStatusFinal();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      proto.massa.api.v1.OpExecutionStatusFinal.serializeBinaryToWriter
    );
  }
  f = message.getDenunciationExecutionStatusCandidate();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.massa.api.v1.DenunciationExecutionStatusCandidate.serializeBinaryToWriter
    );
  }
  f = message.getDenunciationExecutionStatusFinal();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.massa.api.v1.DenunciationExecutionStatusFinal.serializeBinaryToWriter
    );
  }
  f = message.getAddressRollsCandidate();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.massa.api.v1.AddressRollsCandidate.serializeBinaryToWriter
    );
  }
  f = message.getAddressRollsFinal();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.massa.api.v1.AddressRollsFinal.serializeBinaryToWriter
    );
  }
  f = message.getAddressDeferredCreditsCandidate();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      proto.massa.api.v1.AddressDeferredCreditsCandidate.serializeBinaryToWriter
    );
  }
  f = message.getAddressDeferredCreditsFinal();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      proto.massa.api.v1.AddressDeferredCreditsFinal.serializeBinaryToWriter
    );
  }
  f = message.getCycleInfos();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      proto.massa.api.v1.CycleInfos.serializeBinaryToWriter
    );
  }
  f = message.getEvents();
  if (f != null) {
    writer.writeMessage(
      20,
      f,
      proto.massa.api.v1.Events.serializeBinaryToWriter
    );
  }
};


/**
 * optional AddressExistsCandidate address_exists_candidate = 1;
 * @return {?proto.massa.api.v1.AddressExistsCandidate}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressExistsCandidate = function() {
  return /** @type{?proto.massa.api.v1.AddressExistsCandidate} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressExistsCandidate, 1));
};


/**
 * @param {?proto.massa.api.v1.AddressExistsCandidate|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressExistsCandidate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressExistsCandidate = function() {
  return this.setAddressExistsCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressExistsCandidate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AddressExistsFinal address_exists_final = 2;
 * @return {?proto.massa.api.v1.AddressExistsFinal}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressExistsFinal = function() {
  return /** @type{?proto.massa.api.v1.AddressExistsFinal} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressExistsFinal, 2));
};


/**
 * @param {?proto.massa.api.v1.AddressExistsFinal|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressExistsFinal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressExistsFinal = function() {
  return this.setAddressExistsFinal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressExistsFinal = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AddressBalanceCandidate address_balance_candidate = 3;
 * @return {?proto.massa.api.v1.AddressBalanceCandidate}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressBalanceCandidate = function() {
  return /** @type{?proto.massa.api.v1.AddressBalanceCandidate} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressBalanceCandidate, 3));
};


/**
 * @param {?proto.massa.api.v1.AddressBalanceCandidate|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressBalanceCandidate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressBalanceCandidate = function() {
  return this.setAddressBalanceCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressBalanceCandidate = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AddressBalanceFinal address_balance_final = 4;
 * @return {?proto.massa.api.v1.AddressBalanceFinal}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressBalanceFinal = function() {
  return /** @type{?proto.massa.api.v1.AddressBalanceFinal} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressBalanceFinal, 4));
};


/**
 * @param {?proto.massa.api.v1.AddressBalanceFinal|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressBalanceFinal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressBalanceFinal = function() {
  return this.setAddressBalanceFinal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressBalanceFinal = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AddressBytecodeCandidate address_bytecode_candidate = 5;
 * @return {?proto.massa.api.v1.AddressBytecodeCandidate}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressBytecodeCandidate = function() {
  return /** @type{?proto.massa.api.v1.AddressBytecodeCandidate} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressBytecodeCandidate, 5));
};


/**
 * @param {?proto.massa.api.v1.AddressBytecodeCandidate|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressBytecodeCandidate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressBytecodeCandidate = function() {
  return this.setAddressBytecodeCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressBytecodeCandidate = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AddressBytecodeFinal address_bytecode_final = 6;
 * @return {?proto.massa.api.v1.AddressBytecodeFinal}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressBytecodeFinal = function() {
  return /** @type{?proto.massa.api.v1.AddressBytecodeFinal} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressBytecodeFinal, 6));
};


/**
 * @param {?proto.massa.api.v1.AddressBytecodeFinal|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressBytecodeFinal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressBytecodeFinal = function() {
  return this.setAddressBytecodeFinal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressBytecodeFinal = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional AddressDatastoreKeysCandidate address_datastore_keys_candidate = 7;
 * @return {?proto.massa.api.v1.AddressDatastoreKeysCandidate}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressDatastoreKeysCandidate = function() {
  return /** @type{?proto.massa.api.v1.AddressDatastoreKeysCandidate} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressDatastoreKeysCandidate, 7));
};


/**
 * @param {?proto.massa.api.v1.AddressDatastoreKeysCandidate|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressDatastoreKeysCandidate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressDatastoreKeysCandidate = function() {
  return this.setAddressDatastoreKeysCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressDatastoreKeysCandidate = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional AddressDatastoreKeysFinal address_datastore_keys_final = 8;
 * @return {?proto.massa.api.v1.AddressDatastoreKeysFinal}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressDatastoreKeysFinal = function() {
  return /** @type{?proto.massa.api.v1.AddressDatastoreKeysFinal} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressDatastoreKeysFinal, 8));
};


/**
 * @param {?proto.massa.api.v1.AddressDatastoreKeysFinal|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressDatastoreKeysFinal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressDatastoreKeysFinal = function() {
  return this.setAddressDatastoreKeysFinal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressDatastoreKeysFinal = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional AddressDatastoreValueCandidate address_datastore_value_candidate = 9;
 * @return {?proto.massa.api.v1.AddressDatastoreValueCandidate}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressDatastoreValueCandidate = function() {
  return /** @type{?proto.massa.api.v1.AddressDatastoreValueCandidate} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressDatastoreValueCandidate, 9));
};


/**
 * @param {?proto.massa.api.v1.AddressDatastoreValueCandidate|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressDatastoreValueCandidate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressDatastoreValueCandidate = function() {
  return this.setAddressDatastoreValueCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressDatastoreValueCandidate = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional AddressDatastoreValueFinal address_datastore_value_final = 10;
 * @return {?proto.massa.api.v1.AddressDatastoreValueFinal}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressDatastoreValueFinal = function() {
  return /** @type{?proto.massa.api.v1.AddressDatastoreValueFinal} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressDatastoreValueFinal, 10));
};


/**
 * @param {?proto.massa.api.v1.AddressDatastoreValueFinal|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressDatastoreValueFinal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 10, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressDatastoreValueFinal = function() {
  return this.setAddressDatastoreValueFinal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressDatastoreValueFinal = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional OpExecutionStatusCandidate op_execution_status_candidate = 11;
 * @return {?proto.massa.api.v1.OpExecutionStatusCandidate}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getOpExecutionStatusCandidate = function() {
  return /** @type{?proto.massa.api.v1.OpExecutionStatusCandidate} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.OpExecutionStatusCandidate, 11));
};


/**
 * @param {?proto.massa.api.v1.OpExecutionStatusCandidate|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setOpExecutionStatusCandidate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 11, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearOpExecutionStatusCandidate = function() {
  return this.setOpExecutionStatusCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasOpExecutionStatusCandidate = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional OpExecutionStatusFinal op_execution_status_final = 12;
 * @return {?proto.massa.api.v1.OpExecutionStatusFinal}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getOpExecutionStatusFinal = function() {
  return /** @type{?proto.massa.api.v1.OpExecutionStatusFinal} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.OpExecutionStatusFinal, 12));
};


/**
 * @param {?proto.massa.api.v1.OpExecutionStatusFinal|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setOpExecutionStatusFinal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 12, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearOpExecutionStatusFinal = function() {
  return this.setOpExecutionStatusFinal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasOpExecutionStatusFinal = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional DenunciationExecutionStatusCandidate denunciation_execution_status_candidate = 13;
 * @return {?proto.massa.api.v1.DenunciationExecutionStatusCandidate}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getDenunciationExecutionStatusCandidate = function() {
  return /** @type{?proto.massa.api.v1.DenunciationExecutionStatusCandidate} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.DenunciationExecutionStatusCandidate, 13));
};


/**
 * @param {?proto.massa.api.v1.DenunciationExecutionStatusCandidate|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setDenunciationExecutionStatusCandidate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 13, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearDenunciationExecutionStatusCandidate = function() {
  return this.setDenunciationExecutionStatusCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasDenunciationExecutionStatusCandidate = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional DenunciationExecutionStatusFinal denunciation_execution_status_final = 14;
 * @return {?proto.massa.api.v1.DenunciationExecutionStatusFinal}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getDenunciationExecutionStatusFinal = function() {
  return /** @type{?proto.massa.api.v1.DenunciationExecutionStatusFinal} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.DenunciationExecutionStatusFinal, 14));
};


/**
 * @param {?proto.massa.api.v1.DenunciationExecutionStatusFinal|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setDenunciationExecutionStatusFinal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 14, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearDenunciationExecutionStatusFinal = function() {
  return this.setDenunciationExecutionStatusFinal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasDenunciationExecutionStatusFinal = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional AddressRollsCandidate address_rolls_candidate = 15;
 * @return {?proto.massa.api.v1.AddressRollsCandidate}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressRollsCandidate = function() {
  return /** @type{?proto.massa.api.v1.AddressRollsCandidate} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressRollsCandidate, 15));
};


/**
 * @param {?proto.massa.api.v1.AddressRollsCandidate|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressRollsCandidate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 15, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressRollsCandidate = function() {
  return this.setAddressRollsCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressRollsCandidate = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional AddressRollsFinal address_rolls_final = 16;
 * @return {?proto.massa.api.v1.AddressRollsFinal}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressRollsFinal = function() {
  return /** @type{?proto.massa.api.v1.AddressRollsFinal} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressRollsFinal, 16));
};


/**
 * @param {?proto.massa.api.v1.AddressRollsFinal|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressRollsFinal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 16, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressRollsFinal = function() {
  return this.setAddressRollsFinal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressRollsFinal = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional AddressDeferredCreditsCandidate address_deferred_credits_candidate = 17;
 * @return {?proto.massa.api.v1.AddressDeferredCreditsCandidate}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressDeferredCreditsCandidate = function() {
  return /** @type{?proto.massa.api.v1.AddressDeferredCreditsCandidate} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressDeferredCreditsCandidate, 17));
};


/**
 * @param {?proto.massa.api.v1.AddressDeferredCreditsCandidate|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressDeferredCreditsCandidate = function(value) {
  return jspb.Message.setOneofWrapperField(this, 17, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressDeferredCreditsCandidate = function() {
  return this.setAddressDeferredCreditsCandidate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressDeferredCreditsCandidate = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional AddressDeferredCreditsFinal address_deferred_credits_final = 18;
 * @return {?proto.massa.api.v1.AddressDeferredCreditsFinal}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getAddressDeferredCreditsFinal = function() {
  return /** @type{?proto.massa.api.v1.AddressDeferredCreditsFinal} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AddressDeferredCreditsFinal, 18));
};


/**
 * @param {?proto.massa.api.v1.AddressDeferredCreditsFinal|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setAddressDeferredCreditsFinal = function(value) {
  return jspb.Message.setOneofWrapperField(this, 18, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearAddressDeferredCreditsFinal = function() {
  return this.setAddressDeferredCreditsFinal(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasAddressDeferredCreditsFinal = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional CycleInfos cycle_infos = 19;
 * @return {?proto.massa.api.v1.CycleInfos}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getCycleInfos = function() {
  return /** @type{?proto.massa.api.v1.CycleInfos} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.CycleInfos, 19));
};


/**
 * @param {?proto.massa.api.v1.CycleInfos|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setCycleInfos = function(value) {
  return jspb.Message.setOneofWrapperField(this, 19, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearCycleInfos = function() {
  return this.setCycleInfos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasCycleInfos = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional Events events = 20;
 * @return {?proto.massa.api.v1.Events}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.getEvents = function() {
  return /** @type{?proto.massa.api.v1.Events} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.Events, 20));
};


/**
 * @param {?proto.massa.api.v1.Events|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
*/
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.setEvents = function(value) {
  return jspb.Message.setOneofWrapperField(this, 20, proto.massa.api.v1.ExecutionQueryRequestItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryRequestItem} returns this
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.clearEvents = function() {
  return this.setEvents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryRequestItem.prototype.hasEvents = function() {
  return jspb.Message.getField(this, 20) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressExistsCandidate.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressExistsCandidate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressExistsCandidate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressExistsCandidate.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressExistsCandidate}
 */
proto.massa.api.v1.AddressExistsCandidate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressExistsCandidate;
  return proto.massa.api.v1.AddressExistsCandidate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressExistsCandidate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressExistsCandidate}
 */
proto.massa.api.v1.AddressExistsCandidate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressExistsCandidate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressExistsCandidate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressExistsCandidate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressExistsCandidate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressExistsCandidate.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressExistsCandidate} returns this
 */
proto.massa.api.v1.AddressExistsCandidate.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressExistsFinal.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressExistsFinal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressExistsFinal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressExistsFinal.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressExistsFinal}
 */
proto.massa.api.v1.AddressExistsFinal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressExistsFinal;
  return proto.massa.api.v1.AddressExistsFinal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressExistsFinal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressExistsFinal}
 */
proto.massa.api.v1.AddressExistsFinal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressExistsFinal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressExistsFinal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressExistsFinal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressExistsFinal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressExistsFinal.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressExistsFinal} returns this
 */
proto.massa.api.v1.AddressExistsFinal.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressBalanceCandidate.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressBalanceCandidate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressBalanceCandidate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressBalanceCandidate.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressBalanceCandidate}
 */
proto.massa.api.v1.AddressBalanceCandidate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressBalanceCandidate;
  return proto.massa.api.v1.AddressBalanceCandidate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressBalanceCandidate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressBalanceCandidate}
 */
proto.massa.api.v1.AddressBalanceCandidate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressBalanceCandidate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressBalanceCandidate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressBalanceCandidate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressBalanceCandidate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressBalanceCandidate.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressBalanceCandidate} returns this
 */
proto.massa.api.v1.AddressBalanceCandidate.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressBalanceFinal.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressBalanceFinal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressBalanceFinal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressBalanceFinal.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressBalanceFinal}
 */
proto.massa.api.v1.AddressBalanceFinal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressBalanceFinal;
  return proto.massa.api.v1.AddressBalanceFinal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressBalanceFinal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressBalanceFinal}
 */
proto.massa.api.v1.AddressBalanceFinal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressBalanceFinal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressBalanceFinal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressBalanceFinal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressBalanceFinal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressBalanceFinal.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressBalanceFinal} returns this
 */
proto.massa.api.v1.AddressBalanceFinal.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressBytecodeCandidate.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressBytecodeCandidate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressBytecodeCandidate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressBytecodeCandidate.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressBytecodeCandidate}
 */
proto.massa.api.v1.AddressBytecodeCandidate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressBytecodeCandidate;
  return proto.massa.api.v1.AddressBytecodeCandidate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressBytecodeCandidate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressBytecodeCandidate}
 */
proto.massa.api.v1.AddressBytecodeCandidate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressBytecodeCandidate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressBytecodeCandidate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressBytecodeCandidate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressBytecodeCandidate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressBytecodeCandidate.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressBytecodeCandidate} returns this
 */
proto.massa.api.v1.AddressBytecodeCandidate.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressBytecodeFinal.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressBytecodeFinal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressBytecodeFinal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressBytecodeFinal.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressBytecodeFinal}
 */
proto.massa.api.v1.AddressBytecodeFinal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressBytecodeFinal;
  return proto.massa.api.v1.AddressBytecodeFinal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressBytecodeFinal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressBytecodeFinal}
 */
proto.massa.api.v1.AddressBytecodeFinal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressBytecodeFinal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressBytecodeFinal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressBytecodeFinal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressBytecodeFinal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressBytecodeFinal.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressBytecodeFinal} returns this
 */
proto.massa.api.v1.AddressBytecodeFinal.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressDatastoreKeysCandidate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressDatastoreKeysCandidate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    prefix: msg.getPrefix_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressDatastoreKeysCandidate}
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressDatastoreKeysCandidate;
  return proto.massa.api.v1.AddressDatastoreKeysCandidate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressDatastoreKeysCandidate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressDatastoreKeysCandidate}
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrefix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressDatastoreKeysCandidate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressDatastoreKeysCandidate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrefix_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressDatastoreKeysCandidate} returns this
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes prefix = 2;
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes prefix = 2;
 * This is a type-conversion wrapper around `getPrefix()`
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.prototype.getPrefix_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrefix()));
};


/**
 * optional bytes prefix = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrefix()`
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.prototype.getPrefix_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrefix()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.massa.api.v1.AddressDatastoreKeysCandidate} returns this
 */
proto.massa.api.v1.AddressDatastoreKeysCandidate.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressDatastoreKeysFinal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressDatastoreKeysFinal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    prefix: msg.getPrefix_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressDatastoreKeysFinal}
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressDatastoreKeysFinal;
  return proto.massa.api.v1.AddressDatastoreKeysFinal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressDatastoreKeysFinal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressDatastoreKeysFinal}
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPrefix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressDatastoreKeysFinal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressDatastoreKeysFinal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPrefix_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressDatastoreKeysFinal} returns this
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes prefix = 2;
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.prototype.getPrefix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes prefix = 2;
 * This is a type-conversion wrapper around `getPrefix()`
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.prototype.getPrefix_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPrefix()));
};


/**
 * optional bytes prefix = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPrefix()`
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.prototype.getPrefix_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPrefix()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.massa.api.v1.AddressDatastoreKeysFinal} returns this
 */
proto.massa.api.v1.AddressDatastoreKeysFinal.prototype.setPrefix = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressDatastoreValueCandidate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressDatastoreValueCandidate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressDatastoreValueCandidate}
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressDatastoreValueCandidate;
  return proto.massa.api.v1.AddressDatastoreValueCandidate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressDatastoreValueCandidate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressDatastoreValueCandidate}
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressDatastoreValueCandidate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressDatastoreValueCandidate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressDatastoreValueCandidate} returns this
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes key = 2;
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.massa.api.v1.AddressDatastoreValueCandidate} returns this
 */
proto.massa.api.v1.AddressDatastoreValueCandidate.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressDatastoreValueFinal.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressDatastoreValueFinal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressDatastoreValueFinal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDatastoreValueFinal.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressDatastoreValueFinal}
 */
proto.massa.api.v1.AddressDatastoreValueFinal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressDatastoreValueFinal;
  return proto.massa.api.v1.AddressDatastoreValueFinal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressDatastoreValueFinal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressDatastoreValueFinal}
 */
proto.massa.api.v1.AddressDatastoreValueFinal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressDatastoreValueFinal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressDatastoreValueFinal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressDatastoreValueFinal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDatastoreValueFinal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreValueFinal.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressDatastoreValueFinal} returns this
 */
proto.massa.api.v1.AddressDatastoreValueFinal.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bytes key = 2;
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreValueFinal.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes key = 2;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.massa.api.v1.AddressDatastoreValueFinal.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressDatastoreValueFinal.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.massa.api.v1.AddressDatastoreValueFinal} returns this
 */
proto.massa.api.v1.AddressDatastoreValueFinal.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.OpExecutionStatusCandidate.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.OpExecutionStatusCandidate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.OpExecutionStatusCandidate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.OpExecutionStatusCandidate.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.OpExecutionStatusCandidate}
 */
proto.massa.api.v1.OpExecutionStatusCandidate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.OpExecutionStatusCandidate;
  return proto.massa.api.v1.OpExecutionStatusCandidate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.OpExecutionStatusCandidate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.OpExecutionStatusCandidate}
 */
proto.massa.api.v1.OpExecutionStatusCandidate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.OpExecutionStatusCandidate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.OpExecutionStatusCandidate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.OpExecutionStatusCandidate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.OpExecutionStatusCandidate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string operation_id = 1;
 * @return {string}
 */
proto.massa.api.v1.OpExecutionStatusCandidate.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.OpExecutionStatusCandidate} returns this
 */
proto.massa.api.v1.OpExecutionStatusCandidate.prototype.setOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.OpExecutionStatusFinal.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.OpExecutionStatusFinal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.OpExecutionStatusFinal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.OpExecutionStatusFinal.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.OpExecutionStatusFinal}
 */
proto.massa.api.v1.OpExecutionStatusFinal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.OpExecutionStatusFinal;
  return proto.massa.api.v1.OpExecutionStatusFinal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.OpExecutionStatusFinal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.OpExecutionStatusFinal}
 */
proto.massa.api.v1.OpExecutionStatusFinal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.OpExecutionStatusFinal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.OpExecutionStatusFinal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.OpExecutionStatusFinal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.OpExecutionStatusFinal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string operation_id = 1;
 * @return {string}
 */
proto.massa.api.v1.OpExecutionStatusFinal.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.OpExecutionStatusFinal} returns this
 */
proto.massa.api.v1.OpExecutionStatusFinal.prototype.setOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.DenunciationExecutionStatusCandidate.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.DenunciationExecutionStatusCandidate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.DenunciationExecutionStatusCandidate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DenunciationExecutionStatusCandidate.toObject = function(includeInstance, msg) {
  var f, obj = {
    denunciationIndex: (f = msg.getDenunciationIndex()) && massa_model_v1_denunciation_pb.DenunciationIndex.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.DenunciationExecutionStatusCandidate}
 */
proto.massa.api.v1.DenunciationExecutionStatusCandidate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.DenunciationExecutionStatusCandidate;
  return proto.massa.api.v1.DenunciationExecutionStatusCandidate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.DenunciationExecutionStatusCandidate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.DenunciationExecutionStatusCandidate}
 */
proto.massa.api.v1.DenunciationExecutionStatusCandidate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_denunciation_pb.DenunciationIndex;
      reader.readMessage(value,massa_model_v1_denunciation_pb.DenunciationIndex.deserializeBinaryFromReader);
      msg.setDenunciationIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.DenunciationExecutionStatusCandidate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.DenunciationExecutionStatusCandidate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.DenunciationExecutionStatusCandidate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DenunciationExecutionStatusCandidate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDenunciationIndex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_denunciation_pb.DenunciationIndex.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.DenunciationIndex denunciation_index = 1;
 * @return {?proto.massa.model.v1.DenunciationIndex}
 */
proto.massa.api.v1.DenunciationExecutionStatusCandidate.prototype.getDenunciationIndex = function() {
  return /** @type{?proto.massa.model.v1.DenunciationIndex} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_denunciation_pb.DenunciationIndex, 1));
};


/**
 * @param {?proto.massa.model.v1.DenunciationIndex|undefined} value
 * @return {!proto.massa.api.v1.DenunciationExecutionStatusCandidate} returns this
*/
proto.massa.api.v1.DenunciationExecutionStatusCandidate.prototype.setDenunciationIndex = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.DenunciationExecutionStatusCandidate} returns this
 */
proto.massa.api.v1.DenunciationExecutionStatusCandidate.prototype.clearDenunciationIndex = function() {
  return this.setDenunciationIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.DenunciationExecutionStatusCandidate.prototype.hasDenunciationIndex = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.DenunciationExecutionStatusFinal.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.DenunciationExecutionStatusFinal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.DenunciationExecutionStatusFinal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DenunciationExecutionStatusFinal.toObject = function(includeInstance, msg) {
  var f, obj = {
    denunciationIndex: (f = msg.getDenunciationIndex()) && massa_model_v1_denunciation_pb.DenunciationIndex.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.DenunciationExecutionStatusFinal}
 */
proto.massa.api.v1.DenunciationExecutionStatusFinal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.DenunciationExecutionStatusFinal;
  return proto.massa.api.v1.DenunciationExecutionStatusFinal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.DenunciationExecutionStatusFinal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.DenunciationExecutionStatusFinal}
 */
proto.massa.api.v1.DenunciationExecutionStatusFinal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_denunciation_pb.DenunciationIndex;
      reader.readMessage(value,massa_model_v1_denunciation_pb.DenunciationIndex.deserializeBinaryFromReader);
      msg.setDenunciationIndex(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.DenunciationExecutionStatusFinal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.DenunciationExecutionStatusFinal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.DenunciationExecutionStatusFinal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DenunciationExecutionStatusFinal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDenunciationIndex();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_denunciation_pb.DenunciationIndex.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.DenunciationIndex denunciation_index = 1;
 * @return {?proto.massa.model.v1.DenunciationIndex}
 */
proto.massa.api.v1.DenunciationExecutionStatusFinal.prototype.getDenunciationIndex = function() {
  return /** @type{?proto.massa.model.v1.DenunciationIndex} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_denunciation_pb.DenunciationIndex, 1));
};


/**
 * @param {?proto.massa.model.v1.DenunciationIndex|undefined} value
 * @return {!proto.massa.api.v1.DenunciationExecutionStatusFinal} returns this
*/
proto.massa.api.v1.DenunciationExecutionStatusFinal.prototype.setDenunciationIndex = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.DenunciationExecutionStatusFinal} returns this
 */
proto.massa.api.v1.DenunciationExecutionStatusFinal.prototype.clearDenunciationIndex = function() {
  return this.setDenunciationIndex(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.DenunciationExecutionStatusFinal.prototype.hasDenunciationIndex = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressRollsCandidate.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressRollsCandidate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressRollsCandidate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressRollsCandidate.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressRollsCandidate}
 */
proto.massa.api.v1.AddressRollsCandidate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressRollsCandidate;
  return proto.massa.api.v1.AddressRollsCandidate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressRollsCandidate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressRollsCandidate}
 */
proto.massa.api.v1.AddressRollsCandidate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressRollsCandidate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressRollsCandidate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressRollsCandidate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressRollsCandidate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressRollsCandidate.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressRollsCandidate} returns this
 */
proto.massa.api.v1.AddressRollsCandidate.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressRollsFinal.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressRollsFinal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressRollsFinal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressRollsFinal.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressRollsFinal}
 */
proto.massa.api.v1.AddressRollsFinal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressRollsFinal;
  return proto.massa.api.v1.AddressRollsFinal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressRollsFinal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressRollsFinal}
 */
proto.massa.api.v1.AddressRollsFinal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressRollsFinal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressRollsFinal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressRollsFinal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressRollsFinal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressRollsFinal.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressRollsFinal} returns this
 */
proto.massa.api.v1.AddressRollsFinal.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressDeferredCreditsCandidate.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressDeferredCreditsCandidate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressDeferredCreditsCandidate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDeferredCreditsCandidate.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressDeferredCreditsCandidate}
 */
proto.massa.api.v1.AddressDeferredCreditsCandidate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressDeferredCreditsCandidate;
  return proto.massa.api.v1.AddressDeferredCreditsCandidate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressDeferredCreditsCandidate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressDeferredCreditsCandidate}
 */
proto.massa.api.v1.AddressDeferredCreditsCandidate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressDeferredCreditsCandidate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressDeferredCreditsCandidate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressDeferredCreditsCandidate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDeferredCreditsCandidate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressDeferredCreditsCandidate.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressDeferredCreditsCandidate} returns this
 */
proto.massa.api.v1.AddressDeferredCreditsCandidate.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AddressDeferredCreditsFinal.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AddressDeferredCreditsFinal.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AddressDeferredCreditsFinal} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDeferredCreditsFinal.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AddressDeferredCreditsFinal}
 */
proto.massa.api.v1.AddressDeferredCreditsFinal.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AddressDeferredCreditsFinal;
  return proto.massa.api.v1.AddressDeferredCreditsFinal.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AddressDeferredCreditsFinal} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AddressDeferredCreditsFinal}
 */
proto.massa.api.v1.AddressDeferredCreditsFinal.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AddressDeferredCreditsFinal.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AddressDeferredCreditsFinal.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AddressDeferredCreditsFinal} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AddressDeferredCreditsFinal.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.AddressDeferredCreditsFinal.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AddressDeferredCreditsFinal} returns this
 */
proto.massa.api.v1.AddressDeferredCreditsFinal.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.CycleInfos.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.CycleInfos.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.CycleInfos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.CycleInfos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.CycleInfos.toObject = function(includeInstance, msg) {
  var f, obj = {
    cycle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    restrictToAddressesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.CycleInfos}
 */
proto.massa.api.v1.CycleInfos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.CycleInfos;
  return proto.massa.api.v1.CycleInfos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.CycleInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.CycleInfos}
 */
proto.massa.api.v1.CycleInfos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCycle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addRestrictToAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.CycleInfos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.CycleInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.CycleInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.CycleInfos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCycle();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getRestrictToAddressesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional uint64 cycle = 1;
 * @return {number}
 */
proto.massa.api.v1.CycleInfos.prototype.getCycle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.CycleInfos} returns this
 */
proto.massa.api.v1.CycleInfos.prototype.setCycle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated string restrict_to_addresses = 2;
 * @return {!Array<string>}
 */
proto.massa.api.v1.CycleInfos.prototype.getRestrictToAddressesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.massa.api.v1.CycleInfos} returns this
 */
proto.massa.api.v1.CycleInfos.prototype.setRestrictToAddressesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.CycleInfos} returns this
 */
proto.massa.api.v1.CycleInfos.prototype.addRestrictToAddresses = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.CycleInfos} returns this
 */
proto.massa.api.v1.CycleInfos.prototype.clearRestrictToAddressesList = function() {
  return this.setRestrictToAddressesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.Events.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.Events.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.Events.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.Events} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.Events.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.ScExecutionEventsFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.Events}
 */
proto.massa.api.v1.Events.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.Events;
  return proto.massa.api.v1.Events.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.Events} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.Events}
 */
proto.massa.api.v1.Events.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.ScExecutionEventsFilter;
      reader.readMessage(value,proto.massa.api.v1.ScExecutionEventsFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.Events.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.Events.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.Events} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.Events.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.ScExecutionEventsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ScExecutionEventsFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.ScExecutionEventsFilter>}
 */
proto.massa.api.v1.Events.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.ScExecutionEventsFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.ScExecutionEventsFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.ScExecutionEventsFilter>} value
 * @return {!proto.massa.api.v1.Events} returns this
*/
proto.massa.api.v1.Events.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.ScExecutionEventsFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.ScExecutionEventsFilter}
 */
proto.massa.api.v1.Events.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.ScExecutionEventsFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.Events} returns this
 */
proto.massa.api.v1.Events.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.QueryStateResponse.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.QueryStateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.QueryStateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.QueryStateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.QueryStateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    finalCursor: (f = msg.getFinalCursor()) && massa_model_v1_slot_pb.Slot.toObject(includeInstance, f),
    candidateCursor: (f = msg.getCandidateCursor()) && massa_model_v1_slot_pb.Slot.toObject(includeInstance, f),
    finalStateFingerprint: jspb.Message.getFieldWithDefault(msg, 3, ""),
    responsesList: jspb.Message.toObjectList(msg.getResponsesList(),
    proto.massa.api.v1.ExecutionQueryResponse.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.QueryStateResponse}
 */
proto.massa.api.v1.QueryStateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.QueryStateResponse;
  return proto.massa.api.v1.QueryStateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.QueryStateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.QueryStateResponse}
 */
proto.massa.api.v1.QueryStateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_slot_pb.Slot;
      reader.readMessage(value,massa_model_v1_slot_pb.Slot.deserializeBinaryFromReader);
      msg.setFinalCursor(value);
      break;
    case 2:
      var value = new massa_model_v1_slot_pb.Slot;
      reader.readMessage(value,massa_model_v1_slot_pb.Slot.deserializeBinaryFromReader);
      msg.setCandidateCursor(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinalStateFingerprint(value);
      break;
    case 4:
      var value = new proto.massa.api.v1.ExecutionQueryResponse;
      reader.readMessage(value,proto.massa.api.v1.ExecutionQueryResponse.deserializeBinaryFromReader);
      msg.addResponses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.QueryStateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.QueryStateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.QueryStateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.QueryStateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFinalCursor();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_slot_pb.Slot.serializeBinaryToWriter
    );
  }
  f = message.getCandidateCursor();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_slot_pb.Slot.serializeBinaryToWriter
    );
  }
  f = message.getFinalStateFingerprint();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getResponsesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.massa.api.v1.ExecutionQueryResponse.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.Slot final_cursor = 1;
 * @return {?proto.massa.model.v1.Slot}
 */
proto.massa.api.v1.QueryStateResponse.prototype.getFinalCursor = function() {
  return /** @type{?proto.massa.model.v1.Slot} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_slot_pb.Slot, 1));
};


/**
 * @param {?proto.massa.model.v1.Slot|undefined} value
 * @return {!proto.massa.api.v1.QueryStateResponse} returns this
*/
proto.massa.api.v1.QueryStateResponse.prototype.setFinalCursor = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.QueryStateResponse} returns this
 */
proto.massa.api.v1.QueryStateResponse.prototype.clearFinalCursor = function() {
  return this.setFinalCursor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.QueryStateResponse.prototype.hasFinalCursor = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Slot candidate_cursor = 2;
 * @return {?proto.massa.model.v1.Slot}
 */
proto.massa.api.v1.QueryStateResponse.prototype.getCandidateCursor = function() {
  return /** @type{?proto.massa.model.v1.Slot} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_slot_pb.Slot, 2));
};


/**
 * @param {?proto.massa.model.v1.Slot|undefined} value
 * @return {!proto.massa.api.v1.QueryStateResponse} returns this
*/
proto.massa.api.v1.QueryStateResponse.prototype.setCandidateCursor = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.QueryStateResponse} returns this
 */
proto.massa.api.v1.QueryStateResponse.prototype.clearCandidateCursor = function() {
  return this.setCandidateCursor(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.QueryStateResponse.prototype.hasCandidateCursor = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string final_state_fingerprint = 3;
 * @return {string}
 */
proto.massa.api.v1.QueryStateResponse.prototype.getFinalStateFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.QueryStateResponse} returns this
 */
proto.massa.api.v1.QueryStateResponse.prototype.setFinalStateFingerprint = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated ExecutionQueryResponse responses = 4;
 * @return {!Array<!proto.massa.api.v1.ExecutionQueryResponse>}
 */
proto.massa.api.v1.QueryStateResponse.prototype.getResponsesList = function() {
  return /** @type{!Array<!proto.massa.api.v1.ExecutionQueryResponse>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.ExecutionQueryResponse, 4));
};


/**
 * @param {!Array<!proto.massa.api.v1.ExecutionQueryResponse>} value
 * @return {!proto.massa.api.v1.QueryStateResponse} returns this
*/
proto.massa.api.v1.QueryStateResponse.prototype.setResponsesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.massa.api.v1.ExecutionQueryResponse=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.ExecutionQueryResponse}
 */
proto.massa.api.v1.QueryStateResponse.prototype.addResponses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.massa.api.v1.ExecutionQueryResponse, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.QueryStateResponse} returns this
 */
proto.massa.api.v1.QueryStateResponse.prototype.clearResponsesList = function() {
  return this.setResponsesList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.ExecutionQueryResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.massa.api.v1.ExecutionQueryResponse.ResponseCase = {
  RESPONSE_NOT_SET: 0,
  RESULT: 1,
  ERROR: 2
};

/**
 * @return {proto.massa.api.v1.ExecutionQueryResponse.ResponseCase}
 */
proto.massa.api.v1.ExecutionQueryResponse.prototype.getResponseCase = function() {
  return /** @type {proto.massa.api.v1.ExecutionQueryResponse.ResponseCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.ExecutionQueryResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutionQueryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutionQueryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutionQueryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && proto.massa.api.v1.ExecutionQueryResponseItem.toObject(includeInstance, f),
    error: (f = msg.getError()) && massa_model_v1_commons_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutionQueryResponse}
 */
proto.massa.api.v1.ExecutionQueryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutionQueryResponse;
  return proto.massa.api.v1.ExecutionQueryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutionQueryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutionQueryResponse}
 */
proto.massa.api.v1.ExecutionQueryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.ExecutionQueryResponseItem;
      reader.readMessage(value,proto.massa.api.v1.ExecutionQueryResponseItem.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 2:
      var value = new massa_model_v1_commons_pb.Error;
      reader.readMessage(value,massa_model_v1_commons_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutionQueryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutionQueryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutionQueryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.massa.api.v1.ExecutionQueryResponseItem.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_commons_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional ExecutionQueryResponseItem result = 1;
 * @return {?proto.massa.api.v1.ExecutionQueryResponseItem}
 */
proto.massa.api.v1.ExecutionQueryResponse.prototype.getResult = function() {
  return /** @type{?proto.massa.api.v1.ExecutionQueryResponseItem} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.ExecutionQueryResponseItem, 1));
};


/**
 * @param {?proto.massa.api.v1.ExecutionQueryResponseItem|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponse} returns this
*/
proto.massa.api.v1.ExecutionQueryResponse.prototype.setResult = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.ExecutionQueryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponse} returns this
 */
proto.massa.api.v1.ExecutionQueryResponse.prototype.clearResult = function() {
  return this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Error error = 2;
 * @return {?proto.massa.model.v1.Error}
 */
proto.massa.api.v1.ExecutionQueryResponse.prototype.getError = function() {
  return /** @type{?proto.massa.model.v1.Error} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.Error, 2));
};


/**
 * @param {?proto.massa.model.v1.Error|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponse} returns this
*/
proto.massa.api.v1.ExecutionQueryResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.ExecutionQueryResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponse} returns this
 */
proto.massa.api.v1.ExecutionQueryResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_ = [[1,2,3,4,5,6,7,8,9]];

/**
 * @enum {number}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.ResponseItemCase = {
  RESPONSE_ITEM_NOT_SET: 0,
  BOOLEAN: 1,
  ROLL_COUNT: 2,
  AMOUNT: 3,
  BYTES: 4,
  VEC_BYTES: 5,
  DEFERRED_CREDITS: 6,
  EXECUTION_STATUS: 7,
  CYCLE_INFOS: 8,
  EVENTS: 9
};

/**
 * @return {proto.massa.api.v1.ExecutionQueryResponseItem.ResponseItemCase}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getResponseItemCase = function() {
  return /** @type {proto.massa.api.v1.ExecutionQueryResponseItem.ResponseItemCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutionQueryResponseItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutionQueryResponseItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryResponseItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    pb_boolean: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    rollCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
    amount: (f = msg.getAmount()) && massa_model_v1_amount_pb.NativeAmount.toObject(includeInstance, f),
    bytes: msg.getBytes_asB64(),
    vecBytes: (f = msg.getVecBytes()) && massa_model_v1_commons_pb.ArrayOfBytesWrapper.toObject(includeInstance, f),
    deferredCredits: (f = msg.getDeferredCredits()) && proto.massa.api.v1.DeferredCreditsEntryWrapper.toObject(includeInstance, f),
    executionStatus: jspb.Message.getFieldWithDefault(msg, 7, 0),
    cycleInfos: (f = msg.getCycleInfos()) && proto.massa.api.v1.ExecutionQueryCycleInfos.toObject(includeInstance, f),
    events: (f = msg.getEvents()) && proto.massa.api.v1.ScOutputEventsWrapper.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutionQueryResponseItem;
  return proto.massa.api.v1.ExecutionQueryResponseItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutionQueryResponseItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolean(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setRollCount(value);
      break;
    case 3:
      var value = new massa_model_v1_amount_pb.NativeAmount;
      reader.readMessage(value,massa_model_v1_amount_pb.NativeAmount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytes(value);
      break;
    case 5:
      var value = new massa_model_v1_commons_pb.ArrayOfBytesWrapper;
      reader.readMessage(value,massa_model_v1_commons_pb.ArrayOfBytesWrapper.deserializeBinaryFromReader);
      msg.setVecBytes(value);
      break;
    case 6:
      var value = new proto.massa.api.v1.DeferredCreditsEntryWrapper;
      reader.readMessage(value,proto.massa.api.v1.DeferredCreditsEntryWrapper.deserializeBinaryFromReader);
      msg.setDeferredCredits(value);
      break;
    case 7:
      var value = /** @type {!proto.massa.api.v1.ExecutionQueryExecutionStatus} */ (reader.readEnum());
      msg.setExecutionStatus(value);
      break;
    case 8:
      var value = new proto.massa.api.v1.ExecutionQueryCycleInfos;
      reader.readMessage(value,proto.massa.api.v1.ExecutionQueryCycleInfos.deserializeBinaryFromReader);
      msg.setCycleInfos(value);
      break;
    case 9:
      var value = new proto.massa.api.v1.ScOutputEventsWrapper;
      reader.readMessage(value,proto.massa.api.v1.ScOutputEventsWrapper.deserializeBinaryFromReader);
      msg.setEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutionQueryResponseItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutionQueryResponseItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryResponseItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      massa_model_v1_amount_pb.NativeAmount.serializeBinaryToWriter
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getVecBytes();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      massa_model_v1_commons_pb.ArrayOfBytesWrapper.serializeBinaryToWriter
    );
  }
  f = message.getDeferredCredits();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.massa.api.v1.DeferredCreditsEntryWrapper.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.massa.api.v1.ExecutionQueryExecutionStatus} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getCycleInfos();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.massa.api.v1.ExecutionQueryCycleInfos.serializeBinaryToWriter
    );
  }
  f = message.getEvents();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.massa.api.v1.ScOutputEventsWrapper.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool boolean = 1;
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getBoolean = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.setBoolean = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.clearBoolean = function() {
  return jspb.Message.setOneofField(this, 1, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.hasBoolean = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 roll_count = 2;
 * @return {number}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getRollCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.setRollCount = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.clearRollCount = function() {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.hasRollCount = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional massa.model.v1.NativeAmount amount = 3;
 * @return {?proto.massa.model.v1.NativeAmount}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getAmount = function() {
  return /** @type{?proto.massa.model.v1.NativeAmount} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_amount_pb.NativeAmount, 3));
};


/**
 * @param {?proto.massa.model.v1.NativeAmount|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
*/
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.setAmount = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bytes bytes = 4;
 * @return {string}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getBytes = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes bytes = 4;
 * This is a type-conversion wrapper around `getBytes()`
 * @return {string}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getBytes_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytes()));
};


/**
 * optional bytes bytes = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytes()`
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getBytes_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytes()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.setBytes = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.clearBytes = function() {
  return jspb.Message.setOneofField(this, 4, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.hasBytes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional massa.model.v1.ArrayOfBytesWrapper vec_bytes = 5;
 * @return {?proto.massa.model.v1.ArrayOfBytesWrapper}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getVecBytes = function() {
  return /** @type{?proto.massa.model.v1.ArrayOfBytesWrapper} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.ArrayOfBytesWrapper, 5));
};


/**
 * @param {?proto.massa.model.v1.ArrayOfBytesWrapper|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
*/
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.setVecBytes = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.clearVecBytes = function() {
  return this.setVecBytes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.hasVecBytes = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional DeferredCreditsEntryWrapper deferred_credits = 6;
 * @return {?proto.massa.api.v1.DeferredCreditsEntryWrapper}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getDeferredCredits = function() {
  return /** @type{?proto.massa.api.v1.DeferredCreditsEntryWrapper} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.DeferredCreditsEntryWrapper, 6));
};


/**
 * @param {?proto.massa.api.v1.DeferredCreditsEntryWrapper|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
*/
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.setDeferredCredits = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.clearDeferredCredits = function() {
  return this.setDeferredCredits(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.hasDeferredCredits = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ExecutionQueryExecutionStatus execution_status = 7;
 * @return {!proto.massa.api.v1.ExecutionQueryExecutionStatus}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getExecutionStatus = function() {
  return /** @type {!proto.massa.api.v1.ExecutionQueryExecutionStatus} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.massa.api.v1.ExecutionQueryExecutionStatus} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.setExecutionStatus = function(value) {
  return jspb.Message.setOneofField(this, 7, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.clearExecutionStatus = function() {
  return jspb.Message.setOneofField(this, 7, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.hasExecutionStatus = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional ExecutionQueryCycleInfos cycle_infos = 8;
 * @return {?proto.massa.api.v1.ExecutionQueryCycleInfos}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getCycleInfos = function() {
  return /** @type{?proto.massa.api.v1.ExecutionQueryCycleInfos} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.ExecutionQueryCycleInfos, 8));
};


/**
 * @param {?proto.massa.api.v1.ExecutionQueryCycleInfos|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
*/
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.setCycleInfos = function(value) {
  return jspb.Message.setOneofWrapperField(this, 8, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.clearCycleInfos = function() {
  return this.setCycleInfos(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.hasCycleInfos = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional ScOutputEventsWrapper events = 9;
 * @return {?proto.massa.api.v1.ScOutputEventsWrapper}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.getEvents = function() {
  return /** @type{?proto.massa.api.v1.ScOutputEventsWrapper} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.ScOutputEventsWrapper, 9));
};


/**
 * @param {?proto.massa.api.v1.ScOutputEventsWrapper|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
*/
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.setEvents = function(value) {
  return jspb.Message.setOneofWrapperField(this, 9, proto.massa.api.v1.ExecutionQueryResponseItem.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryResponseItem} returns this
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.clearEvents = function() {
  return this.setEvents(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryResponseItem.prototype.hasEvents = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.DeferredCreditsEntryWrapper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.DeferredCreditsEntryWrapper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper.toObject = function(includeInstance, msg) {
  var f, obj = {
    entriesList: jspb.Message.toObjectList(msg.getEntriesList(),
    proto.massa.api.v1.DeferredCreditsEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.DeferredCreditsEntryWrapper}
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.DeferredCreditsEntryWrapper;
  return proto.massa.api.v1.DeferredCreditsEntryWrapper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.DeferredCreditsEntryWrapper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.DeferredCreditsEntryWrapper}
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.DeferredCreditsEntry;
      reader.readMessage(value,proto.massa.api.v1.DeferredCreditsEntry.deserializeBinaryFromReader);
      msg.addEntries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.DeferredCreditsEntryWrapper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.DeferredCreditsEntryWrapper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.DeferredCreditsEntry.serializeBinaryToWriter
    );
  }
};


/**
 * repeated DeferredCreditsEntry entries = 1;
 * @return {!Array<!proto.massa.api.v1.DeferredCreditsEntry>}
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper.prototype.getEntriesList = function() {
  return /** @type{!Array<!proto.massa.api.v1.DeferredCreditsEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.DeferredCreditsEntry, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.DeferredCreditsEntry>} value
 * @return {!proto.massa.api.v1.DeferredCreditsEntryWrapper} returns this
*/
proto.massa.api.v1.DeferredCreditsEntryWrapper.prototype.setEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.DeferredCreditsEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.DeferredCreditsEntry}
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper.prototype.addEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.DeferredCreditsEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.DeferredCreditsEntryWrapper} returns this
 */
proto.massa.api.v1.DeferredCreditsEntryWrapper.prototype.clearEntriesList = function() {
  return this.setEntriesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.DeferredCreditsEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.DeferredCreditsEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.DeferredCreditsEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DeferredCreditsEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    slot: (f = msg.getSlot()) && massa_model_v1_slot_pb.Slot.toObject(includeInstance, f),
    amount: (f = msg.getAmount()) && massa_model_v1_amount_pb.NativeAmount.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.DeferredCreditsEntry}
 */
proto.massa.api.v1.DeferredCreditsEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.DeferredCreditsEntry;
  return proto.massa.api.v1.DeferredCreditsEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.DeferredCreditsEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.DeferredCreditsEntry}
 */
proto.massa.api.v1.DeferredCreditsEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_slot_pb.Slot;
      reader.readMessage(value,massa_model_v1_slot_pb.Slot.deserializeBinaryFromReader);
      msg.setSlot(value);
      break;
    case 2:
      var value = new massa_model_v1_amount_pb.NativeAmount;
      reader.readMessage(value,massa_model_v1_amount_pb.NativeAmount.deserializeBinaryFromReader);
      msg.setAmount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.DeferredCreditsEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.DeferredCreditsEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.DeferredCreditsEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.DeferredCreditsEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSlot();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_slot_pb.Slot.serializeBinaryToWriter
    );
  }
  f = message.getAmount();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_amount_pb.NativeAmount.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.Slot slot = 1;
 * @return {?proto.massa.model.v1.Slot}
 */
proto.massa.api.v1.DeferredCreditsEntry.prototype.getSlot = function() {
  return /** @type{?proto.massa.model.v1.Slot} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_slot_pb.Slot, 1));
};


/**
 * @param {?proto.massa.model.v1.Slot|undefined} value
 * @return {!proto.massa.api.v1.DeferredCreditsEntry} returns this
*/
proto.massa.api.v1.DeferredCreditsEntry.prototype.setSlot = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.DeferredCreditsEntry} returns this
 */
proto.massa.api.v1.DeferredCreditsEntry.prototype.clearSlot = function() {
  return this.setSlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.DeferredCreditsEntry.prototype.hasSlot = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.NativeAmount amount = 2;
 * @return {?proto.massa.model.v1.NativeAmount}
 */
proto.massa.api.v1.DeferredCreditsEntry.prototype.getAmount = function() {
  return /** @type{?proto.massa.model.v1.NativeAmount} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_amount_pb.NativeAmount, 2));
};


/**
 * @param {?proto.massa.model.v1.NativeAmount|undefined} value
 * @return {!proto.massa.api.v1.DeferredCreditsEntry} returns this
*/
proto.massa.api.v1.DeferredCreditsEntry.prototype.setAmount = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.DeferredCreditsEntry} returns this
 */
proto.massa.api.v1.DeferredCreditsEntry.prototype.clearAmount = function() {
  return this.setAmount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.DeferredCreditsEntry.prototype.hasAmount = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutionQueryCycleInfos.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutionQueryCycleInfos} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.toObject = function(includeInstance, msg) {
  var f, obj = {
    cycle: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isFinal: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    stakerInfosList: jspb.Message.toObjectList(msg.getStakerInfosList(),
    proto.massa.api.v1.ExecutionQueryStakerInfoEntry.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutionQueryCycleInfos}
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutionQueryCycleInfos;
  return proto.massa.api.v1.ExecutionQueryCycleInfos.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutionQueryCycleInfos} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutionQueryCycleInfos}
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setCycle(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFinal(value);
      break;
    case 3:
      var value = new proto.massa.api.v1.ExecutionQueryStakerInfoEntry;
      reader.readMessage(value,proto.massa.api.v1.ExecutionQueryStakerInfoEntry.deserializeBinaryFromReader);
      msg.addStakerInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutionQueryCycleInfos.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutionQueryCycleInfos} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCycle();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getIsFinal();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getStakerInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.massa.api.v1.ExecutionQueryStakerInfoEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 cycle = 1;
 * @return {number}
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.prototype.getCycle = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.ExecutionQueryCycleInfos} returns this
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.prototype.setCycle = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_final = 2;
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.prototype.getIsFinal = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.massa.api.v1.ExecutionQueryCycleInfos} returns this
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.prototype.setIsFinal = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated ExecutionQueryStakerInfoEntry staker_infos = 3;
 * @return {!Array<!proto.massa.api.v1.ExecutionQueryStakerInfoEntry>}
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.prototype.getStakerInfosList = function() {
  return /** @type{!Array<!proto.massa.api.v1.ExecutionQueryStakerInfoEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.ExecutionQueryStakerInfoEntry, 3));
};


/**
 * @param {!Array<!proto.massa.api.v1.ExecutionQueryStakerInfoEntry>} value
 * @return {!proto.massa.api.v1.ExecutionQueryCycleInfos} returns this
*/
proto.massa.api.v1.ExecutionQueryCycleInfos.prototype.setStakerInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfoEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoEntry}
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.prototype.addStakerInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.massa.api.v1.ExecutionQueryStakerInfoEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.ExecutionQueryCycleInfos} returns this
 */
proto.massa.api.v1.ExecutionQueryCycleInfos.prototype.clearStakerInfosList = function() {
  return this.setStakerInfosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutionQueryStakerInfoEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfoEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    info: (f = msg.getInfo()) && proto.massa.api.v1.ExecutionQueryStakerInfo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoEntry}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutionQueryStakerInfoEntry;
  return proto.massa.api.v1.ExecutionQueryStakerInfoEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfoEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoEntry}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.ExecutionQueryStakerInfo;
      reader.readMessage(value,proto.massa.api.v1.ExecutionQueryStakerInfo.deserializeBinaryFromReader);
      msg.setInfo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutionQueryStakerInfoEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfoEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getInfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.ExecutionQueryStakerInfo.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoEntry} returns this
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ExecutionQueryStakerInfo info = 2;
 * @return {?proto.massa.api.v1.ExecutionQueryStakerInfo}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.prototype.getInfo = function() {
  return /** @type{?proto.massa.api.v1.ExecutionQueryStakerInfo} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.ExecutionQueryStakerInfo, 2));
};


/**
 * @param {?proto.massa.api.v1.ExecutionQueryStakerInfo|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoEntry} returns this
*/
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.prototype.setInfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoEntry} returns this
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.prototype.clearInfo = function() {
  return this.setInfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoEntry.prototype.hasInfo = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutionQueryStakerInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    activeRolls: jspb.Message.getFieldWithDefault(msg, 1, 0),
    productionStats: (f = msg.getProductionStats()) && proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfo}
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutionQueryStakerInfo;
  return proto.massa.api.v1.ExecutionQueryStakerInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfo}
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setActiveRolls(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry;
      reader.readMessage(value,proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.deserializeBinaryFromReader);
      msg.setProductionStats(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutionQueryStakerInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getActiveRolls();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getProductionStats();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.serializeBinaryToWriter
    );
  }
};


/**
 * optional uint64 active_rolls = 1;
 * @return {number}
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.prototype.getActiveRolls = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfo} returns this
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.prototype.setActiveRolls = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional ExecutionQueryStakerInfoProductionStatsEntry production_stats = 2;
 * @return {?proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry}
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.prototype.getProductionStats = function() {
  return /** @type{?proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry, 2));
};


/**
 * @param {?proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfo} returns this
*/
proto.massa.api.v1.ExecutionQueryStakerInfo.prototype.setProductionStats = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfo} returns this
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.prototype.clearProductionStats = function() {
  return this.setProductionStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryStakerInfo.prototype.hasProductionStats = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    address: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stats: (f = msg.getStats()) && proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry;
  return proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    case 2:
      var value = new proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats;
      reader.readMessage(value,proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.deserializeBinaryFromReader);
      msg.setStats(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStats();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.serializeBinaryToWriter
    );
  }
};


/**
 * optional string address = 1;
 * @return {string}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry} returns this
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.prototype.setAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ExecutionQueryStakerInfoProductionStats stats = 2;
 * @return {?proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.prototype.getStats = function() {
  return /** @type{?proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats, 2));
};


/**
 * @param {?proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats|undefined} value
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry} returns this
*/
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.prototype.setStats = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry} returns this
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.prototype.clearStats = function() {
  return this.setStats(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStatsEntry.prototype.hasStats = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockSuccessCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    blockFailureCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats;
  return proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockSuccessCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setBlockFailureCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockSuccessCount();
  if (f !== 0) {
    writer.writeUint64(
      1,
      f
    );
  }
  f = message.getBlockFailureCount();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
};


/**
 * optional uint64 block_success_count = 1;
 * @return {number}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.prototype.getBlockSuccessCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats} returns this
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.prototype.setBlockSuccessCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional uint64 block_failure_count = 2;
 * @return {number}
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.prototype.getBlockFailureCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats} returns this
 */
proto.massa.api.v1.ExecutionQueryStakerInfoProductionStats.prototype.setBlockFailureCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.ScOutputEventsWrapper.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ScOutputEventsWrapper.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ScOutputEventsWrapper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ScOutputEventsWrapper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ScOutputEventsWrapper.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    massa_model_v1_execution_pb.ScExecutionEvent.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ScOutputEventsWrapper}
 */
proto.massa.api.v1.ScOutputEventsWrapper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ScOutputEventsWrapper;
  return proto.massa.api.v1.ScOutputEventsWrapper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ScOutputEventsWrapper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ScOutputEventsWrapper}
 */
proto.massa.api.v1.ScOutputEventsWrapper.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_execution_pb.ScExecutionEvent;
      reader.readMessage(value,massa_model_v1_execution_pb.ScExecutionEvent.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ScOutputEventsWrapper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ScOutputEventsWrapper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ScOutputEventsWrapper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ScOutputEventsWrapper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_execution_pb.ScExecutionEvent.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.ScExecutionEvent events = 1;
 * @return {!Array<!proto.massa.model.v1.ScExecutionEvent>}
 */
proto.massa.api.v1.ScOutputEventsWrapper.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.massa.model.v1.ScExecutionEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_execution_pb.ScExecutionEvent, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.ScExecutionEvent>} value
 * @return {!proto.massa.api.v1.ScOutputEventsWrapper} returns this
*/
proto.massa.api.v1.ScOutputEventsWrapper.prototype.setEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.ScExecutionEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.ScExecutionEvent}
 */
proto.massa.api.v1.ScOutputEventsWrapper.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.ScExecutionEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.ScOutputEventsWrapper} returns this
 */
proto.massa.api.v1.ScOutputEventsWrapper.prototype.clearEventsList = function() {
  return this.setEventsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.NewBlocksRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.NewBlocksFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewBlocksRequest}
 */
proto.massa.api.v1.NewBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewBlocksRequest;
  return proto.massa.api.v1.NewBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewBlocksRequest}
 */
proto.massa.api.v1.NewBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.NewBlocksFilter;
      reader.readMessage(value,proto.massa.api.v1.NewBlocksFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.NewBlocksFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NewBlocksFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.NewBlocksFilter>}
 */
proto.massa.api.v1.NewBlocksRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.NewBlocksFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.NewBlocksFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.NewBlocksFilter>} value
 * @return {!proto.massa.api.v1.NewBlocksRequest} returns this
*/
proto.massa.api.v1.NewBlocksRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.NewBlocksFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.NewBlocksFilter}
 */
proto.massa.api.v1.NewBlocksRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.NewBlocksFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.NewBlocksRequest} returns this
 */
proto.massa.api.v1.NewBlocksRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.NewBlocksFilter.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.massa.api.v1.NewBlocksFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  BLOCK_IDS: 1,
  ADDRESSES: 2,
  SLOT_RANGE: 3
};

/**
 * @return {proto.massa.api.v1.NewBlocksFilter.FilterCase}
 */
proto.massa.api.v1.NewBlocksFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.NewBlocksFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.NewBlocksFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewBlocksFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewBlocksFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewBlocksFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockIds: (f = msg.getBlockIds()) && massa_model_v1_block_pb.BlockIds.toObject(includeInstance, f),
    addresses: (f = msg.getAddresses()) && massa_model_v1_address_pb.Addresses.toObject(includeInstance, f),
    slotRange: (f = msg.getSlotRange()) && massa_model_v1_slot_pb.SlotRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewBlocksFilter}
 */
proto.massa.api.v1.NewBlocksFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewBlocksFilter;
  return proto.massa.api.v1.NewBlocksFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewBlocksFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewBlocksFilter}
 */
proto.massa.api.v1.NewBlocksFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_block_pb.BlockIds;
      reader.readMessage(value,massa_model_v1_block_pb.BlockIds.deserializeBinaryFromReader);
      msg.setBlockIds(value);
      break;
    case 2:
      var value = new massa_model_v1_address_pb.Addresses;
      reader.readMessage(value,massa_model_v1_address_pb.Addresses.deserializeBinaryFromReader);
      msg.setAddresses(value);
      break;
    case 3:
      var value = new massa_model_v1_slot_pb.SlotRange;
      reader.readMessage(value,massa_model_v1_slot_pb.SlotRange.deserializeBinaryFromReader);
      msg.setSlotRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewBlocksFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewBlocksFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewBlocksFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_block_pb.BlockIds.serializeBinaryToWriter
    );
  }
  f = message.getAddresses();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_address_pb.Addresses.serializeBinaryToWriter
    );
  }
  f = message.getSlotRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      massa_model_v1_slot_pb.SlotRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.BlockIds block_ids = 1;
 * @return {?proto.massa.model.v1.BlockIds}
 */
proto.massa.api.v1.NewBlocksFilter.prototype.getBlockIds = function() {
  return /** @type{?proto.massa.model.v1.BlockIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_block_pb.BlockIds, 1));
};


/**
 * @param {?proto.massa.model.v1.BlockIds|undefined} value
 * @return {!proto.massa.api.v1.NewBlocksFilter} returns this
*/
proto.massa.api.v1.NewBlocksFilter.prototype.setBlockIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.NewBlocksFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewBlocksFilter} returns this
 */
proto.massa.api.v1.NewBlocksFilter.prototype.clearBlockIds = function() {
  return this.setBlockIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewBlocksFilter.prototype.hasBlockIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Addresses addresses = 2;
 * @return {?proto.massa.model.v1.Addresses}
 */
proto.massa.api.v1.NewBlocksFilter.prototype.getAddresses = function() {
  return /** @type{?proto.massa.model.v1.Addresses} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_address_pb.Addresses, 2));
};


/**
 * @param {?proto.massa.model.v1.Addresses|undefined} value
 * @return {!proto.massa.api.v1.NewBlocksFilter} returns this
*/
proto.massa.api.v1.NewBlocksFilter.prototype.setAddresses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.NewBlocksFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewBlocksFilter} returns this
 */
proto.massa.api.v1.NewBlocksFilter.prototype.clearAddresses = function() {
  return this.setAddresses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewBlocksFilter.prototype.hasAddresses = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional massa.model.v1.SlotRange slot_range = 3;
 * @return {?proto.massa.model.v1.SlotRange}
 */
proto.massa.api.v1.NewBlocksFilter.prototype.getSlotRange = function() {
  return /** @type{?proto.massa.model.v1.SlotRange} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_slot_pb.SlotRange, 3));
};


/**
 * @param {?proto.massa.model.v1.SlotRange|undefined} value
 * @return {!proto.massa.api.v1.NewBlocksFilter} returns this
*/
proto.massa.api.v1.NewBlocksFilter.prototype.setSlotRange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.NewBlocksFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewBlocksFilter} returns this
 */
proto.massa.api.v1.NewBlocksFilter.prototype.clearSlotRange = function() {
  return this.setSlotRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewBlocksFilter.prototype.hasSlotRange = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signedBlock: (f = msg.getSignedBlock()) && massa_model_v1_block_pb.SignedBlock.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewBlocksResponse}
 */
proto.massa.api.v1.NewBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewBlocksResponse;
  return proto.massa.api.v1.NewBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewBlocksResponse}
 */
proto.massa.api.v1.NewBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_block_pb.SignedBlock;
      reader.readMessage(value,massa_model_v1_block_pb.SignedBlock.deserializeBinaryFromReader);
      msg.setSignedBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignedBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_block_pb.SignedBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.SignedBlock signed_block = 1;
 * @return {?proto.massa.model.v1.SignedBlock}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.getSignedBlock = function() {
  return /** @type{?proto.massa.model.v1.SignedBlock} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_block_pb.SignedBlock, 1));
};


/**
 * @param {?proto.massa.model.v1.SignedBlock|undefined} value
 * @return {!proto.massa.api.v1.NewBlocksResponse} returns this
*/
proto.massa.api.v1.NewBlocksResponse.prototype.setSignedBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewBlocksResponse} returns this
 */
proto.massa.api.v1.NewBlocksResponse.prototype.clearSignedBlock = function() {
  return this.setSignedBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewBlocksResponse.prototype.hasSignedBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.NewEndorsementsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewEndorsementsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewEndorsementsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewEndorsementsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewEndorsementsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.NewEndorsementsFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewEndorsementsRequest}
 */
proto.massa.api.v1.NewEndorsementsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewEndorsementsRequest;
  return proto.massa.api.v1.NewEndorsementsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewEndorsementsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewEndorsementsRequest}
 */
proto.massa.api.v1.NewEndorsementsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.NewEndorsementsFilter;
      reader.readMessage(value,proto.massa.api.v1.NewEndorsementsFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewEndorsementsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewEndorsementsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewEndorsementsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewEndorsementsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.NewEndorsementsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NewEndorsementsFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.NewEndorsementsFilter>}
 */
proto.massa.api.v1.NewEndorsementsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.NewEndorsementsFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.NewEndorsementsFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.NewEndorsementsFilter>} value
 * @return {!proto.massa.api.v1.NewEndorsementsRequest} returns this
*/
proto.massa.api.v1.NewEndorsementsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.NewEndorsementsFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.NewEndorsementsFilter}
 */
proto.massa.api.v1.NewEndorsementsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.NewEndorsementsFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.NewEndorsementsRequest} returns this
 */
proto.massa.api.v1.NewEndorsementsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.NewEndorsementsFilter.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.massa.api.v1.NewEndorsementsFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  ENDORSEMENT_IDS: 1,
  ADDRESSES: 2,
  BLOCK_IDS: 3
};

/**
 * @return {proto.massa.api.v1.NewEndorsementsFilter.FilterCase}
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.NewEndorsementsFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.NewEndorsementsFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewEndorsementsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewEndorsementsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewEndorsementsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    endorsementIds: (f = msg.getEndorsementIds()) && massa_model_v1_endorsement_pb.EndorsementIds.toObject(includeInstance, f),
    addresses: (f = msg.getAddresses()) && massa_model_v1_address_pb.Addresses.toObject(includeInstance, f),
    blockIds: (f = msg.getBlockIds()) && massa_model_v1_block_pb.BlockIds.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewEndorsementsFilter}
 */
proto.massa.api.v1.NewEndorsementsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewEndorsementsFilter;
  return proto.massa.api.v1.NewEndorsementsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewEndorsementsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewEndorsementsFilter}
 */
proto.massa.api.v1.NewEndorsementsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_endorsement_pb.EndorsementIds;
      reader.readMessage(value,massa_model_v1_endorsement_pb.EndorsementIds.deserializeBinaryFromReader);
      msg.setEndorsementIds(value);
      break;
    case 2:
      var value = new massa_model_v1_address_pb.Addresses;
      reader.readMessage(value,massa_model_v1_address_pb.Addresses.deserializeBinaryFromReader);
      msg.setAddresses(value);
      break;
    case 3:
      var value = new massa_model_v1_block_pb.BlockIds;
      reader.readMessage(value,massa_model_v1_block_pb.BlockIds.deserializeBinaryFromReader);
      msg.setBlockIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewEndorsementsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewEndorsementsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewEndorsementsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndorsementIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_endorsement_pb.EndorsementIds.serializeBinaryToWriter
    );
  }
  f = message.getAddresses();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_address_pb.Addresses.serializeBinaryToWriter
    );
  }
  f = message.getBlockIds();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      massa_model_v1_block_pb.BlockIds.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.EndorsementIds endorsement_ids = 1;
 * @return {?proto.massa.model.v1.EndorsementIds}
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.getEndorsementIds = function() {
  return /** @type{?proto.massa.model.v1.EndorsementIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_endorsement_pb.EndorsementIds, 1));
};


/**
 * @param {?proto.massa.model.v1.EndorsementIds|undefined} value
 * @return {!proto.massa.api.v1.NewEndorsementsFilter} returns this
*/
proto.massa.api.v1.NewEndorsementsFilter.prototype.setEndorsementIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.NewEndorsementsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewEndorsementsFilter} returns this
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.clearEndorsementIds = function() {
  return this.setEndorsementIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.hasEndorsementIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Addresses addresses = 2;
 * @return {?proto.massa.model.v1.Addresses}
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.getAddresses = function() {
  return /** @type{?proto.massa.model.v1.Addresses} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_address_pb.Addresses, 2));
};


/**
 * @param {?proto.massa.model.v1.Addresses|undefined} value
 * @return {!proto.massa.api.v1.NewEndorsementsFilter} returns this
*/
proto.massa.api.v1.NewEndorsementsFilter.prototype.setAddresses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.NewEndorsementsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewEndorsementsFilter} returns this
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.clearAddresses = function() {
  return this.setAddresses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.hasAddresses = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional massa.model.v1.BlockIds block_ids = 3;
 * @return {?proto.massa.model.v1.BlockIds}
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.getBlockIds = function() {
  return /** @type{?proto.massa.model.v1.BlockIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_block_pb.BlockIds, 3));
};


/**
 * @param {?proto.massa.model.v1.BlockIds|undefined} value
 * @return {!proto.massa.api.v1.NewEndorsementsFilter} returns this
*/
proto.massa.api.v1.NewEndorsementsFilter.prototype.setBlockIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.NewEndorsementsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewEndorsementsFilter} returns this
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.clearBlockIds = function() {
  return this.setBlockIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewEndorsementsFilter.prototype.hasBlockIds = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewEndorsementsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewEndorsementsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewEndorsementsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signedEndorsement: (f = msg.getSignedEndorsement()) && massa_model_v1_endorsement_pb.SignedEndorsement.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewEndorsementsResponse}
 */
proto.massa.api.v1.NewEndorsementsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewEndorsementsResponse;
  return proto.massa.api.v1.NewEndorsementsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewEndorsementsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewEndorsementsResponse}
 */
proto.massa.api.v1.NewEndorsementsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_endorsement_pb.SignedEndorsement;
      reader.readMessage(value,massa_model_v1_endorsement_pb.SignedEndorsement.deserializeBinaryFromReader);
      msg.setSignedEndorsement(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewEndorsementsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewEndorsementsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewEndorsementsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignedEndorsement();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_endorsement_pb.SignedEndorsement.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.SignedEndorsement signed_endorsement = 1;
 * @return {?proto.massa.model.v1.SignedEndorsement}
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.getSignedEndorsement = function() {
  return /** @type{?proto.massa.model.v1.SignedEndorsement} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_endorsement_pb.SignedEndorsement, 1));
};


/**
 * @param {?proto.massa.model.v1.SignedEndorsement|undefined} value
 * @return {!proto.massa.api.v1.NewEndorsementsResponse} returns this
*/
proto.massa.api.v1.NewEndorsementsResponse.prototype.setSignedEndorsement = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewEndorsementsResponse} returns this
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.clearSignedEndorsement = function() {
  return this.setSignedEndorsement(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewEndorsementsResponse.prototype.hasSignedEndorsement = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.NewFilledBlocksRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewFilledBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewFilledBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewFilledBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewFilledBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.NewBlocksFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewFilledBlocksRequest}
 */
proto.massa.api.v1.NewFilledBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewFilledBlocksRequest;
  return proto.massa.api.v1.NewFilledBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewFilledBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewFilledBlocksRequest}
 */
proto.massa.api.v1.NewFilledBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.NewBlocksFilter;
      reader.readMessage(value,proto.massa.api.v1.NewBlocksFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewFilledBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewFilledBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewFilledBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewFilledBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.NewBlocksFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NewBlocksFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.NewBlocksFilter>}
 */
proto.massa.api.v1.NewFilledBlocksRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.NewBlocksFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.NewBlocksFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.NewBlocksFilter>} value
 * @return {!proto.massa.api.v1.NewFilledBlocksRequest} returns this
*/
proto.massa.api.v1.NewFilledBlocksRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.NewBlocksFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.NewBlocksFilter}
 */
proto.massa.api.v1.NewFilledBlocksRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.NewBlocksFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.NewFilledBlocksRequest} returns this
 */
proto.massa.api.v1.NewFilledBlocksRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.NewFilledBlocksFilter.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.massa.api.v1.NewFilledBlocksFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  BLOCK_IDS: 1,
  ADDRESSES: 2,
  SLOT_RANGE: 3
};

/**
 * @return {proto.massa.api.v1.NewFilledBlocksFilter.FilterCase}
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.NewFilledBlocksFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.NewFilledBlocksFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewFilledBlocksFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewFilledBlocksFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewFilledBlocksFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockIds: (f = msg.getBlockIds()) && massa_model_v1_block_pb.BlockIds.toObject(includeInstance, f),
    addresses: (f = msg.getAddresses()) && massa_model_v1_address_pb.Addresses.toObject(includeInstance, f),
    slotRange: (f = msg.getSlotRange()) && massa_model_v1_slot_pb.SlotRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewFilledBlocksFilter}
 */
proto.massa.api.v1.NewFilledBlocksFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewFilledBlocksFilter;
  return proto.massa.api.v1.NewFilledBlocksFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewFilledBlocksFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewFilledBlocksFilter}
 */
proto.massa.api.v1.NewFilledBlocksFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_block_pb.BlockIds;
      reader.readMessage(value,massa_model_v1_block_pb.BlockIds.deserializeBinaryFromReader);
      msg.setBlockIds(value);
      break;
    case 2:
      var value = new massa_model_v1_address_pb.Addresses;
      reader.readMessage(value,massa_model_v1_address_pb.Addresses.deserializeBinaryFromReader);
      msg.setAddresses(value);
      break;
    case 3:
      var value = new massa_model_v1_slot_pb.SlotRange;
      reader.readMessage(value,massa_model_v1_slot_pb.SlotRange.deserializeBinaryFromReader);
      msg.setSlotRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewFilledBlocksFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewFilledBlocksFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewFilledBlocksFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_block_pb.BlockIds.serializeBinaryToWriter
    );
  }
  f = message.getAddresses();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_address_pb.Addresses.serializeBinaryToWriter
    );
  }
  f = message.getSlotRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      massa_model_v1_slot_pb.SlotRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.BlockIds block_ids = 1;
 * @return {?proto.massa.model.v1.BlockIds}
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.getBlockIds = function() {
  return /** @type{?proto.massa.model.v1.BlockIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_block_pb.BlockIds, 1));
};


/**
 * @param {?proto.massa.model.v1.BlockIds|undefined} value
 * @return {!proto.massa.api.v1.NewFilledBlocksFilter} returns this
*/
proto.massa.api.v1.NewFilledBlocksFilter.prototype.setBlockIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.NewFilledBlocksFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewFilledBlocksFilter} returns this
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.clearBlockIds = function() {
  return this.setBlockIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.hasBlockIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Addresses addresses = 2;
 * @return {?proto.massa.model.v1.Addresses}
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.getAddresses = function() {
  return /** @type{?proto.massa.model.v1.Addresses} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_address_pb.Addresses, 2));
};


/**
 * @param {?proto.massa.model.v1.Addresses|undefined} value
 * @return {!proto.massa.api.v1.NewFilledBlocksFilter} returns this
*/
proto.massa.api.v1.NewFilledBlocksFilter.prototype.setAddresses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.NewFilledBlocksFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewFilledBlocksFilter} returns this
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.clearAddresses = function() {
  return this.setAddresses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.hasAddresses = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional massa.model.v1.SlotRange slot_range = 3;
 * @return {?proto.massa.model.v1.SlotRange}
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.getSlotRange = function() {
  return /** @type{?proto.massa.model.v1.SlotRange} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_slot_pb.SlotRange, 3));
};


/**
 * @param {?proto.massa.model.v1.SlotRange|undefined} value
 * @return {!proto.massa.api.v1.NewFilledBlocksFilter} returns this
*/
proto.massa.api.v1.NewFilledBlocksFilter.prototype.setSlotRange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.NewFilledBlocksFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewFilledBlocksFilter} returns this
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.clearSlotRange = function() {
  return this.setSlotRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewFilledBlocksFilter.prototype.hasSlotRange = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewFilledBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewFilledBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewFilledBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    filledBlock: (f = msg.getFilledBlock()) && massa_model_v1_block_pb.FilledBlock.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewFilledBlocksResponse}
 */
proto.massa.api.v1.NewFilledBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewFilledBlocksResponse;
  return proto.massa.api.v1.NewFilledBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewFilledBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewFilledBlocksResponse}
 */
proto.massa.api.v1.NewFilledBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_block_pb.FilledBlock;
      reader.readMessage(value,massa_model_v1_block_pb.FilledBlock.deserializeBinaryFromReader);
      msg.setFilledBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewFilledBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewFilledBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewFilledBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFilledBlock();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_block_pb.FilledBlock.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.FilledBlock filled_block = 1;
 * @return {?proto.massa.model.v1.FilledBlock}
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.getFilledBlock = function() {
  return /** @type{?proto.massa.model.v1.FilledBlock} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_block_pb.FilledBlock, 1));
};


/**
 * @param {?proto.massa.model.v1.FilledBlock|undefined} value
 * @return {!proto.massa.api.v1.NewFilledBlocksResponse} returns this
*/
proto.massa.api.v1.NewFilledBlocksResponse.prototype.setFilledBlock = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewFilledBlocksResponse} returns this
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.clearFilledBlock = function() {
  return this.setFilledBlock(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewFilledBlocksResponse.prototype.hasFilledBlock = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.NewOperationsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.NewOperationsFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewOperationsRequest}
 */
proto.massa.api.v1.NewOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewOperationsRequest;
  return proto.massa.api.v1.NewOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewOperationsRequest}
 */
proto.massa.api.v1.NewOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.NewOperationsFilter;
      reader.readMessage(value,proto.massa.api.v1.NewOperationsFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.NewOperationsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NewOperationsFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.NewOperationsFilter>}
 */
proto.massa.api.v1.NewOperationsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.NewOperationsFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.NewOperationsFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.NewOperationsFilter>} value
 * @return {!proto.massa.api.v1.NewOperationsRequest} returns this
*/
proto.massa.api.v1.NewOperationsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.NewOperationsFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.NewOperationsFilter}
 */
proto.massa.api.v1.NewOperationsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.NewOperationsFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.NewOperationsRequest} returns this
 */
proto.massa.api.v1.NewOperationsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.NewOperationsFilter.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.massa.api.v1.NewOperationsFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  OPERATION_IDS: 1,
  ADDRESSES: 2,
  OPERATION_TYPES: 3
};

/**
 * @return {proto.massa.api.v1.NewOperationsFilter.FilterCase}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.NewOperationsFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.NewOperationsFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewOperationsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewOperationsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationIds: (f = msg.getOperationIds()) && massa_model_v1_operation_pb.OperationIds.toObject(includeInstance, f),
    addresses: (f = msg.getAddresses()) && massa_model_v1_address_pb.Addresses.toObject(includeInstance, f),
    operationTypes: (f = msg.getOperationTypes()) && massa_model_v1_operation_pb.OpTypes.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewOperationsFilter}
 */
proto.massa.api.v1.NewOperationsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewOperationsFilter;
  return proto.massa.api.v1.NewOperationsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewOperationsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewOperationsFilter}
 */
proto.massa.api.v1.NewOperationsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_operation_pb.OperationIds;
      reader.readMessage(value,massa_model_v1_operation_pb.OperationIds.deserializeBinaryFromReader);
      msg.setOperationIds(value);
      break;
    case 2:
      var value = new massa_model_v1_address_pb.Addresses;
      reader.readMessage(value,massa_model_v1_address_pb.Addresses.deserializeBinaryFromReader);
      msg.setAddresses(value);
      break;
    case 3:
      var value = new massa_model_v1_operation_pb.OpTypes;
      reader.readMessage(value,massa_model_v1_operation_pb.OpTypes.deserializeBinaryFromReader);
      msg.setOperationTypes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewOperationsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewOperationsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_operation_pb.OperationIds.serializeBinaryToWriter
    );
  }
  f = message.getAddresses();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_address_pb.Addresses.serializeBinaryToWriter
    );
  }
  f = message.getOperationTypes();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      massa_model_v1_operation_pb.OpTypes.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.OperationIds operation_ids = 1;
 * @return {?proto.massa.model.v1.OperationIds}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.getOperationIds = function() {
  return /** @type{?proto.massa.model.v1.OperationIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_operation_pb.OperationIds, 1));
};


/**
 * @param {?proto.massa.model.v1.OperationIds|undefined} value
 * @return {!proto.massa.api.v1.NewOperationsFilter} returns this
*/
proto.massa.api.v1.NewOperationsFilter.prototype.setOperationIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.NewOperationsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewOperationsFilter} returns this
 */
proto.massa.api.v1.NewOperationsFilter.prototype.clearOperationIds = function() {
  return this.setOperationIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.hasOperationIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Addresses addresses = 2;
 * @return {?proto.massa.model.v1.Addresses}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.getAddresses = function() {
  return /** @type{?proto.massa.model.v1.Addresses} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_address_pb.Addresses, 2));
};


/**
 * @param {?proto.massa.model.v1.Addresses|undefined} value
 * @return {!proto.massa.api.v1.NewOperationsFilter} returns this
*/
proto.massa.api.v1.NewOperationsFilter.prototype.setAddresses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.NewOperationsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewOperationsFilter} returns this
 */
proto.massa.api.v1.NewOperationsFilter.prototype.clearAddresses = function() {
  return this.setAddresses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.hasAddresses = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional massa.model.v1.OpTypes operation_types = 3;
 * @return {?proto.massa.model.v1.OpTypes}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.getOperationTypes = function() {
  return /** @type{?proto.massa.model.v1.OpTypes} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_operation_pb.OpTypes, 3));
};


/**
 * @param {?proto.massa.model.v1.OpTypes|undefined} value
 * @return {!proto.massa.api.v1.NewOperationsFilter} returns this
*/
proto.massa.api.v1.NewOperationsFilter.prototype.setOperationTypes = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.NewOperationsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewOperationsFilter} returns this
 */
proto.massa.api.v1.NewOperationsFilter.prototype.clearOperationTypes = function() {
  return this.setOperationTypes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewOperationsFilter.prototype.hasOperationTypes = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    signedOperation: (f = msg.getSignedOperation()) && massa_model_v1_operation_pb.SignedOperation.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewOperationsResponse}
 */
proto.massa.api.v1.NewOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewOperationsResponse;
  return proto.massa.api.v1.NewOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewOperationsResponse}
 */
proto.massa.api.v1.NewOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_operation_pb.SignedOperation;
      reader.readMessage(value,massa_model_v1_operation_pb.SignedOperation.deserializeBinaryFromReader);
      msg.setSignedOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignedOperation();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_operation_pb.SignedOperation.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.SignedOperation signed_operation = 1;
 * @return {?proto.massa.model.v1.SignedOperation}
 */
proto.massa.api.v1.NewOperationsResponse.prototype.getSignedOperation = function() {
  return /** @type{?proto.massa.model.v1.SignedOperation} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_operation_pb.SignedOperation, 1));
};


/**
 * @param {?proto.massa.model.v1.SignedOperation|undefined} value
 * @return {!proto.massa.api.v1.NewOperationsResponse} returns this
*/
proto.massa.api.v1.NewOperationsResponse.prototype.setSignedOperation = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewOperationsResponse} returns this
 */
proto.massa.api.v1.NewOperationsResponse.prototype.clearSignedOperation = function() {
  return this.setSignedOperation(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewOperationsResponse.prototype.hasSignedOperation = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewSlotExecutionOutputsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.NewSlotExecutionOutputsFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsRequest}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewSlotExecutionOutputsRequest;
  return proto.massa.api.v1.NewSlotExecutionOutputsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsRequest}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.NewSlotExecutionOutputsFilter;
      reader.readMessage(value,proto.massa.api.v1.NewSlotExecutionOutputsFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewSlotExecutionOutputsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.NewSlotExecutionOutputsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated NewSlotExecutionOutputsFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.NewSlotExecutionOutputsFilter>}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.NewSlotExecutionOutputsFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.NewSlotExecutionOutputsFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.NewSlotExecutionOutputsFilter>} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.NewSlotExecutionOutputsFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsRequest} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_ = [[1,2,3,4,5,6,7]];

/**
 * @enum {number}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  STATUS: 1,
  SLOT_RANGE: 2,
  ASYNC_POOL_CHANGES_FILTER: 3,
  EXECUTED_DENOUNCIATION_FILTER: 4,
  EVENT_FILTER: 5,
  EXECUTED_OPS_CHANGES_FILTER: 6,
  LEDGER_CHANGES_FILTER: 7
};

/**
 * @return {proto.massa.api.v1.NewSlotExecutionOutputsFilter.FilterCase}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.NewSlotExecutionOutputsFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewSlotExecutionOutputsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0),
    slotRange: (f = msg.getSlotRange()) && massa_model_v1_slot_pb.SlotRange.toObject(includeInstance, f),
    asyncPoolChangesFilter: (f = msg.getAsyncPoolChangesFilter()) && proto.massa.api.v1.AsyncPoolChangesFilter.toObject(includeInstance, f),
    executedDenounciationFilter: (f = msg.getExecutedDenounciationFilter()) && proto.massa.api.v1.ExecutedDenounciationFilter.toObject(includeInstance, f),
    eventFilter: (f = msg.getEventFilter()) && proto.massa.api.v1.ExecutionEventFilter.toObject(includeInstance, f),
    executedOpsChangesFilter: (f = msg.getExecutedOpsChangesFilter()) && proto.massa.api.v1.ExecutedOpsChangesFilter.toObject(includeInstance, f),
    ledgerChangesFilter: (f = msg.getLedgerChangesFilter()) && proto.massa.api.v1.LedgerChangesFilter.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewSlotExecutionOutputsFilter;
  return proto.massa.api.v1.NewSlotExecutionOutputsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.massa.model.v1.ExecutionOutputStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 2:
      var value = new massa_model_v1_slot_pb.SlotRange;
      reader.readMessage(value,massa_model_v1_slot_pb.SlotRange.deserializeBinaryFromReader);
      msg.setSlotRange(value);
      break;
    case 3:
      var value = new proto.massa.api.v1.AsyncPoolChangesFilter;
      reader.readMessage(value,proto.massa.api.v1.AsyncPoolChangesFilter.deserializeBinaryFromReader);
      msg.setAsyncPoolChangesFilter(value);
      break;
    case 4:
      var value = new proto.massa.api.v1.ExecutedDenounciationFilter;
      reader.readMessage(value,proto.massa.api.v1.ExecutedDenounciationFilter.deserializeBinaryFromReader);
      msg.setExecutedDenounciationFilter(value);
      break;
    case 5:
      var value = new proto.massa.api.v1.ExecutionEventFilter;
      reader.readMessage(value,proto.massa.api.v1.ExecutionEventFilter.deserializeBinaryFromReader);
      msg.setEventFilter(value);
      break;
    case 6:
      var value = new proto.massa.api.v1.ExecutedOpsChangesFilter;
      reader.readMessage(value,proto.massa.api.v1.ExecutedOpsChangesFilter.deserializeBinaryFromReader);
      msg.setExecutedOpsChangesFilter(value);
      break;
    case 7:
      var value = new proto.massa.api.v1.LedgerChangesFilter;
      reader.readMessage(value,proto.massa.api.v1.LedgerChangesFilter.deserializeBinaryFromReader);
      msg.setLedgerChangesFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewSlotExecutionOutputsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {!proto.massa.model.v1.ExecutionOutputStatus} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getSlotRange();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_slot_pb.SlotRange.serializeBinaryToWriter
    );
  }
  f = message.getAsyncPoolChangesFilter();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.massa.api.v1.AsyncPoolChangesFilter.serializeBinaryToWriter
    );
  }
  f = message.getExecutedDenounciationFilter();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.massa.api.v1.ExecutedDenounciationFilter.serializeBinaryToWriter
    );
  }
  f = message.getEventFilter();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.massa.api.v1.ExecutionEventFilter.serializeBinaryToWriter
    );
  }
  f = message.getExecutedOpsChangesFilter();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.massa.api.v1.ExecutedOpsChangesFilter.serializeBinaryToWriter
    );
  }
  f = message.getLedgerChangesFilter();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.massa.api.v1.LedgerChangesFilter.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.ExecutionOutputStatus status = 1;
 * @return {!proto.massa.model.v1.ExecutionOutputStatus}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.getStatus = function() {
  return /** @type {!proto.massa.model.v1.ExecutionOutputStatus} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.massa.model.v1.ExecutionOutputStatus} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.setStatus = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.clearStatus = function() {
  return jspb.Message.setOneofField(this, 1, proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.SlotRange slot_range = 2;
 * @return {?proto.massa.model.v1.SlotRange}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.getSlotRange = function() {
  return /** @type{?proto.massa.model.v1.SlotRange} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_slot_pb.SlotRange, 2));
};


/**
 * @param {?proto.massa.model.v1.SlotRange|undefined} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.setSlotRange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.clearSlotRange = function() {
  return this.setSlotRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.hasSlotRange = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AsyncPoolChangesFilter async_pool_changes_filter = 3;
 * @return {?proto.massa.api.v1.AsyncPoolChangesFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.getAsyncPoolChangesFilter = function() {
  return /** @type{?proto.massa.api.v1.AsyncPoolChangesFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.AsyncPoolChangesFilter, 3));
};


/**
 * @param {?proto.massa.api.v1.AsyncPoolChangesFilter|undefined} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.setAsyncPoolChangesFilter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.clearAsyncPoolChangesFilter = function() {
  return this.setAsyncPoolChangesFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.hasAsyncPoolChangesFilter = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional ExecutedDenounciationFilter executed_denounciation_filter = 4;
 * @return {?proto.massa.api.v1.ExecutedDenounciationFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.getExecutedDenounciationFilter = function() {
  return /** @type{?proto.massa.api.v1.ExecutedDenounciationFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.ExecutedDenounciationFilter, 4));
};


/**
 * @param {?proto.massa.api.v1.ExecutedDenounciationFilter|undefined} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.setExecutedDenounciationFilter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 4, proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.clearExecutedDenounciationFilter = function() {
  return this.setExecutedDenounciationFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.hasExecutedDenounciationFilter = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ExecutionEventFilter event_filter = 5;
 * @return {?proto.massa.api.v1.ExecutionEventFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.getEventFilter = function() {
  return /** @type{?proto.massa.api.v1.ExecutionEventFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.ExecutionEventFilter, 5));
};


/**
 * @param {?proto.massa.api.v1.ExecutionEventFilter|undefined} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.setEventFilter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 5, proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.clearEventFilter = function() {
  return this.setEventFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.hasEventFilter = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ExecutedOpsChangesFilter executed_ops_changes_filter = 6;
 * @return {?proto.massa.api.v1.ExecutedOpsChangesFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.getExecutedOpsChangesFilter = function() {
  return /** @type{?proto.massa.api.v1.ExecutedOpsChangesFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.ExecutedOpsChangesFilter, 6));
};


/**
 * @param {?proto.massa.api.v1.ExecutedOpsChangesFilter|undefined} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.setExecutedOpsChangesFilter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 6, proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.clearExecutedOpsChangesFilter = function() {
  return this.setExecutedOpsChangesFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.hasExecutedOpsChangesFilter = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional LedgerChangesFilter ledger_changes_filter = 7;
 * @return {?proto.massa.api.v1.LedgerChangesFilter}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.getLedgerChangesFilter = function() {
  return /** @type{?proto.massa.api.v1.LedgerChangesFilter} */ (
    jspb.Message.getWrapperField(this, proto.massa.api.v1.LedgerChangesFilter, 7));
};


/**
 * @param {?proto.massa.api.v1.LedgerChangesFilter|undefined} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.setLedgerChangesFilter = function(value) {
  return jspb.Message.setOneofWrapperField(this, 7, proto.massa.api.v1.NewSlotExecutionOutputsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsFilter} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.clearLedgerChangesFilter = function() {
  return this.setLedgerChangesFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsFilter.prototype.hasLedgerChangesFilter = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_ = [[1,2,3,4,5,6]];

/**
 * @enum {number}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  NONE: 1,
  TYPE: 2,
  HANDLER: 3,
  DESTINATION_ADDRESS: 4,
  EMITTER_ADDRESS: 5,
  CAN_BE_EXECUTED: 6
};

/**
 * @return {proto.massa.api.v1.AsyncPoolChangesFilter.FilterCase}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.AsyncPoolChangesFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.AsyncPoolChangesFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.AsyncPoolChangesFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AsyncPoolChangesFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    none: (f = msg.getNone()) && massa_model_v1_commons_pb.Empty.toObject(includeInstance, f),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    handler: jspb.Message.getFieldWithDefault(msg, 3, ""),
    destinationAddress: jspb.Message.getFieldWithDefault(msg, 4, ""),
    emitterAddress: jspb.Message.getFieldWithDefault(msg, 5, ""),
    canBeExecuted: jspb.Message.getBooleanFieldWithDefault(msg, 6, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.AsyncPoolChangesFilter;
  return proto.massa.api.v1.AsyncPoolChangesFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.AsyncPoolChangesFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_commons_pb.Empty;
      reader.readMessage(value,massa_model_v1_commons_pb.Empty.deserializeBinaryFromReader);
      msg.setNone(value);
      break;
    case 2:
      var value = /** @type {!proto.massa.model.v1.AsyncPoolChangeType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setHandler(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDestinationAddress(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmitterAddress(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCanBeExecuted(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.AsyncPoolChangesFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.AsyncPoolChangesFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.AsyncPoolChangesFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNone();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_commons_pb.Empty.serializeBinaryToWriter
    );
  }
  f = /** @type {!proto.massa.model.v1.AsyncPoolChangeType} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeEnum(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
};


/**
 * optional massa.model.v1.Empty none = 1;
 * @return {?proto.massa.model.v1.Empty}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.getNone = function() {
  return /** @type{?proto.massa.model.v1.Empty} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.Empty, 1));
};


/**
 * @param {?proto.massa.model.v1.Empty|undefined} value
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
*/
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.setNone = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.clearNone = function() {
  return this.setNone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.hasNone = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.AsyncPoolChangeType type = 2;
 * @return {!proto.massa.model.v1.AsyncPoolChangeType}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.getType = function() {
  return /** @type {!proto.massa.model.v1.AsyncPoolChangeType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.massa.model.v1.AsyncPoolChangeType} value
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.setType = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.clearType = function() {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string handler = 3;
 * @return {string}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.getHandler = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.setHandler = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.clearHandler = function() {
  return jspb.Message.setOneofField(this, 3, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.hasHandler = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string destination_address = 4;
 * @return {string}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.getDestinationAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.setDestinationAddress = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.clearDestinationAddress = function() {
  return jspb.Message.setOneofField(this, 4, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.hasDestinationAddress = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string emitter_address = 5;
 * @return {string}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.getEmitterAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.setEmitterAddress = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.clearEmitterAddress = function() {
  return jspb.Message.setOneofField(this, 5, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.hasEmitterAddress = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool can_be_executed = 6;
 * @return {boolean}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.getCanBeExecuted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.setCanBeExecuted = function(value) {
  return jspb.Message.setOneofField(this, 6, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.AsyncPoolChangesFilter} returns this
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.clearCanBeExecuted = function() {
  return jspb.Message.setOneofField(this, 6, proto.massa.api.v1.AsyncPoolChangesFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.AsyncPoolChangesFilter.prototype.hasCanBeExecuted = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.PosChangesFilter.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.massa.api.v1.PosChangesFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  NONE: 1,
  ADDRESS: 2
};

/**
 * @return {proto.massa.api.v1.PosChangesFilter.FilterCase}
 */
proto.massa.api.v1.PosChangesFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.PosChangesFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.PosChangesFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.PosChangesFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.PosChangesFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.PosChangesFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.PosChangesFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    none: (f = msg.getNone()) && massa_model_v1_commons_pb.Empty.toObject(includeInstance, f),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.PosChangesFilter}
 */
proto.massa.api.v1.PosChangesFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.PosChangesFilter;
  return proto.massa.api.v1.PosChangesFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.PosChangesFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.PosChangesFilter}
 */
proto.massa.api.v1.PosChangesFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_commons_pb.Empty;
      reader.readMessage(value,massa_model_v1_commons_pb.Empty.deserializeBinaryFromReader);
      msg.setNone(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.PosChangesFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.PosChangesFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.PosChangesFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.PosChangesFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNone();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_commons_pb.Empty.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional massa.model.v1.Empty none = 1;
 * @return {?proto.massa.model.v1.Empty}
 */
proto.massa.api.v1.PosChangesFilter.prototype.getNone = function() {
  return /** @type{?proto.massa.model.v1.Empty} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.Empty, 1));
};


/**
 * @param {?proto.massa.model.v1.Empty|undefined} value
 * @return {!proto.massa.api.v1.PosChangesFilter} returns this
*/
proto.massa.api.v1.PosChangesFilter.prototype.setNone = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.PosChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.PosChangesFilter} returns this
 */
proto.massa.api.v1.PosChangesFilter.prototype.clearNone = function() {
  return this.setNone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.PosChangesFilter.prototype.hasNone = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.massa.api.v1.PosChangesFilter.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.PosChangesFilter} returns this
 */
proto.massa.api.v1.PosChangesFilter.prototype.setAddress = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.PosChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.PosChangesFilter} returns this
 */
proto.massa.api.v1.PosChangesFilter.prototype.clearAddress = function() {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.PosChangesFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.PosChangesFilter.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.ExecutionEventFilter.oneofGroups_ = [[1,2,3,4,5]];

/**
 * @enum {number}
 */
proto.massa.api.v1.ExecutionEventFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  NONE: 1,
  CALLER_ADDRESS: 2,
  EMITTER_ADDRESS: 3,
  ORIGINAL_OPERATION_ID: 4,
  IS_FAILURE: 5
};

/**
 * @return {proto.massa.api.v1.ExecutionEventFilter.FilterCase}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.ExecutionEventFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutionEventFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutionEventFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionEventFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    none: (f = msg.getNone()) && massa_model_v1_commons_pb.Empty.toObject(includeInstance, f),
    callerAddress: jspb.Message.getFieldWithDefault(msg, 2, ""),
    emitterAddress: jspb.Message.getFieldWithDefault(msg, 3, ""),
    originalOperationId: jspb.Message.getFieldWithDefault(msg, 4, ""),
    isFailure: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutionEventFilter}
 */
proto.massa.api.v1.ExecutionEventFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutionEventFilter;
  return proto.massa.api.v1.ExecutionEventFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutionEventFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutionEventFilter}
 */
proto.massa.api.v1.ExecutionEventFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_commons_pb.Empty;
      reader.readMessage(value,massa_model_v1_commons_pb.Empty.deserializeBinaryFromReader);
      msg.setNone(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallerAddress(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmitterAddress(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setOriginalOperationId(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFailure(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutionEventFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutionEventFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutionEventFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNone();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_commons_pb.Empty.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional massa.model.v1.Empty none = 1;
 * @return {?proto.massa.model.v1.Empty}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.getNone = function() {
  return /** @type{?proto.massa.model.v1.Empty} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.Empty, 1));
};


/**
 * @param {?proto.massa.model.v1.Empty|undefined} value
 * @return {!proto.massa.api.v1.ExecutionEventFilter} returns this
*/
proto.massa.api.v1.ExecutionEventFilter.prototype.setNone = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionEventFilter} returns this
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.clearNone = function() {
  return this.setNone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.hasNone = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string caller_address = 2;
 * @return {string}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.getCallerAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.ExecutionEventFilter} returns this
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.setCallerAddress = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionEventFilter} returns this
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.clearCallerAddress = function() {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.hasCallerAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string emitter_address = 3;
 * @return {string}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.getEmitterAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.ExecutionEventFilter} returns this
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.setEmitterAddress = function(value) {
  return jspb.Message.setOneofField(this, 3, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionEventFilter} returns this
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.clearEmitterAddress = function() {
  return jspb.Message.setOneofField(this, 3, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.hasEmitterAddress = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string original_operation_id = 4;
 * @return {string}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.getOriginalOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.ExecutionEventFilter} returns this
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.setOriginalOperationId = function(value) {
  return jspb.Message.setOneofField(this, 4, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionEventFilter} returns this
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.clearOriginalOperationId = function() {
  return jspb.Message.setOneofField(this, 4, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.hasOriginalOperationId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool is_failure = 5;
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.getIsFailure = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.massa.api.v1.ExecutionEventFilter} returns this
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.setIsFailure = function(value) {
  return jspb.Message.setOneofField(this, 5, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ExecutionEventFilter} returns this
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.clearIsFailure = function() {
  return jspb.Message.setOneofField(this, 5, proto.massa.api.v1.ExecutionEventFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutionEventFilter.prototype.hasIsFailure = function() {
  return jspb.Message.getField(this, 5) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  NONE: 1,
  OPERATION_ID: 2
};

/**
 * @return {proto.massa.api.v1.ExecutedOpsChangesFilter.FilterCase}
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.ExecutedOpsChangesFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.ExecutedOpsChangesFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutedOpsChangesFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutedOpsChangesFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    none: (f = msg.getNone()) && massa_model_v1_commons_pb.Empty.toObject(includeInstance, f),
    operationId: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutedOpsChangesFilter}
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutedOpsChangesFilter;
  return proto.massa.api.v1.ExecutedOpsChangesFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutedOpsChangesFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutedOpsChangesFilter}
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_commons_pb.Empty;
      reader.readMessage(value,massa_model_v1_commons_pb.Empty.deserializeBinaryFromReader);
      msg.setNone(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setOperationId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutedOpsChangesFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutedOpsChangesFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNone();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_commons_pb.Empty.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional massa.model.v1.Empty none = 1;
 * @return {?proto.massa.model.v1.Empty}
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.getNone = function() {
  return /** @type{?proto.massa.model.v1.Empty} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.Empty, 1));
};


/**
 * @param {?proto.massa.model.v1.Empty|undefined} value
 * @return {!proto.massa.api.v1.ExecutedOpsChangesFilter} returns this
*/
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.setNone = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.ExecutedOpsChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutedOpsChangesFilter} returns this
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.clearNone = function() {
  return this.setNone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.hasNone = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string operation_id = 2;
 * @return {string}
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.ExecutedOpsChangesFilter} returns this
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.setOperationId = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.ExecutedOpsChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.ExecutedOpsChangesFilter} returns this
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.clearOperationId = function() {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.ExecutedOpsChangesFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutedOpsChangesFilter.prototype.hasOperationId = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.ExecutedDenounciationFilter.oneofGroups_ = [[1]];

/**
 * @enum {number}
 */
proto.massa.api.v1.ExecutedDenounciationFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  NONE: 1
};

/**
 * @return {proto.massa.api.v1.ExecutedDenounciationFilter.FilterCase}
 */
proto.massa.api.v1.ExecutedDenounciationFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.ExecutedDenounciationFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.ExecutedDenounciationFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.ExecutedDenounciationFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.ExecutedDenounciationFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.ExecutedDenounciationFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutedDenounciationFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    none: (f = msg.getNone()) && massa_model_v1_commons_pb.Empty.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.ExecutedDenounciationFilter}
 */
proto.massa.api.v1.ExecutedDenounciationFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.ExecutedDenounciationFilter;
  return proto.massa.api.v1.ExecutedDenounciationFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.ExecutedDenounciationFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.ExecutedDenounciationFilter}
 */
proto.massa.api.v1.ExecutedDenounciationFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_commons_pb.Empty;
      reader.readMessage(value,massa_model_v1_commons_pb.Empty.deserializeBinaryFromReader);
      msg.setNone(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.ExecutedDenounciationFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.ExecutedDenounciationFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.ExecutedDenounciationFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.ExecutedDenounciationFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNone();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_commons_pb.Empty.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.Empty none = 1;
 * @return {?proto.massa.model.v1.Empty}
 */
proto.massa.api.v1.ExecutedDenounciationFilter.prototype.getNone = function() {
  return /** @type{?proto.massa.model.v1.Empty} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.Empty, 1));
};


/**
 * @param {?proto.massa.model.v1.Empty|undefined} value
 * @return {!proto.massa.api.v1.ExecutedDenounciationFilter} returns this
*/
proto.massa.api.v1.ExecutedDenounciationFilter.prototype.setNone = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.ExecutedDenounciationFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.ExecutedDenounciationFilter} returns this
 */
proto.massa.api.v1.ExecutedDenounciationFilter.prototype.clearNone = function() {
  return this.setNone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.ExecutedDenounciationFilter.prototype.hasNone = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.LedgerChangesFilter.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.massa.api.v1.LedgerChangesFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  NONE: 1,
  ADDRESS: 2
};

/**
 * @return {proto.massa.api.v1.LedgerChangesFilter.FilterCase}
 */
proto.massa.api.v1.LedgerChangesFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.LedgerChangesFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.LedgerChangesFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.LedgerChangesFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.LedgerChangesFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.LedgerChangesFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.LedgerChangesFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    none: (f = msg.getNone()) && massa_model_v1_commons_pb.Empty.toObject(includeInstance, f),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.LedgerChangesFilter}
 */
proto.massa.api.v1.LedgerChangesFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.LedgerChangesFilter;
  return proto.massa.api.v1.LedgerChangesFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.LedgerChangesFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.LedgerChangesFilter}
 */
proto.massa.api.v1.LedgerChangesFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_commons_pb.Empty;
      reader.readMessage(value,massa_model_v1_commons_pb.Empty.deserializeBinaryFromReader);
      msg.setNone(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.LedgerChangesFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.LedgerChangesFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.LedgerChangesFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.LedgerChangesFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNone();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_commons_pb.Empty.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional massa.model.v1.Empty none = 1;
 * @return {?proto.massa.model.v1.Empty}
 */
proto.massa.api.v1.LedgerChangesFilter.prototype.getNone = function() {
  return /** @type{?proto.massa.model.v1.Empty} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.Empty, 1));
};


/**
 * @param {?proto.massa.model.v1.Empty|undefined} value
 * @return {!proto.massa.api.v1.LedgerChangesFilter} returns this
*/
proto.massa.api.v1.LedgerChangesFilter.prototype.setNone = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.LedgerChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.LedgerChangesFilter} returns this
 */
proto.massa.api.v1.LedgerChangesFilter.prototype.clearNone = function() {
  return this.setNone(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.LedgerChangesFilter.prototype.hasNone = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.massa.api.v1.LedgerChangesFilter.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.LedgerChangesFilter} returns this
 */
proto.massa.api.v1.LedgerChangesFilter.prototype.setAddress = function(value) {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.LedgerChangesFilter.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.LedgerChangesFilter} returns this
 */
proto.massa.api.v1.LedgerChangesFilter.prototype.clearAddress = function() {
  return jspb.Message.setOneofField(this, 2, proto.massa.api.v1.LedgerChangesFilter.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.LedgerChangesFilter.prototype.hasAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.NewSlotExecutionOutputsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    output: (f = msg.getOutput()) && massa_model_v1_execution_pb.SlotExecutionOutput.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsResponse}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.NewSlotExecutionOutputsResponse;
  return proto.massa.api.v1.NewSlotExecutionOutputsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsResponse}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_execution_pb.SlotExecutionOutput;
      reader.readMessage(value,massa_model_v1_execution_pb.SlotExecutionOutput.deserializeBinaryFromReader);
      msg.setOutput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.NewSlotExecutionOutputsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOutput();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_execution_pb.SlotExecutionOutput.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.SlotExecutionOutput output = 1;
 * @return {?proto.massa.model.v1.SlotExecutionOutput}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.getOutput = function() {
  return /** @type{?proto.massa.model.v1.SlotExecutionOutput} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_execution_pb.SlotExecutionOutput, 1));
};


/**
 * @param {?proto.massa.model.v1.SlotExecutionOutput|undefined} value
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} returns this
*/
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.setOutput = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.NewSlotExecutionOutputsResponse} returns this
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.clearOutput = function() {
  return this.setOutput(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.NewSlotExecutionOutputsResponse.prototype.hasOutput = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    block: msg.getBlock_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendBlocksRequest}
 */
proto.massa.api.v1.SendBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendBlocksRequest;
  return proto.massa.api.v1.SendBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendBlocksRequest}
 */
proto.massa.api.v1.SendBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBlock(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlock_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes block = 1;
 * @return {string}
 */
proto.massa.api.v1.SendBlocksRequest.prototype.getBlock = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes block = 1;
 * This is a type-conversion wrapper around `getBlock()`
 * @return {string}
 */
proto.massa.api.v1.SendBlocksRequest.prototype.getBlock_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBlock()));
};


/**
 * optional bytes block = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBlock()`
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendBlocksRequest.prototype.getBlock_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBlock()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.massa.api.v1.SendBlocksRequest} returns this
 */
proto.massa.api.v1.SendBlocksRequest.prototype.setBlock = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.SendBlocksResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.massa.api.v1.SendBlocksResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  BLOCK_ID: 1,
  ERROR: 2
};

/**
 * @return {proto.massa.api.v1.SendBlocksResponse.ResultCase}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.getResultCase = function() {
  return /** @type {proto.massa.api.v1.SendBlocksResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.SendBlocksResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockId: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: (f = msg.getError()) && massa_model_v1_commons_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendBlocksResponse}
 */
proto.massa.api.v1.SendBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendBlocksResponse;
  return proto.massa.api.v1.SendBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendBlocksResponse}
 */
proto.massa.api.v1.SendBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBlockId(value);
      break;
    case 2:
      var value = new massa_model_v1_commons_pb.Error;
      reader.readMessage(value,massa_model_v1_commons_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_commons_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional string block_id = 1;
 * @return {string}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.getBlockId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.massa.api.v1.SendBlocksResponse} returns this
 */
proto.massa.api.v1.SendBlocksResponse.prototype.setBlockId = function(value) {
  return jspb.Message.setOneofField(this, 1, proto.massa.api.v1.SendBlocksResponse.oneofGroups_[0], value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.massa.api.v1.SendBlocksResponse} returns this
 */
proto.massa.api.v1.SendBlocksResponse.prototype.clearBlockId = function() {
  return jspb.Message.setOneofField(this, 1, proto.massa.api.v1.SendBlocksResponse.oneofGroups_[0], undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.hasBlockId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Error error = 2;
 * @return {?proto.massa.model.v1.Error}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.getError = function() {
  return /** @type{?proto.massa.model.v1.Error} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.Error, 2));
};


/**
 * @param {?proto.massa.model.v1.Error|undefined} value
 * @return {!proto.massa.api.v1.SendBlocksResponse} returns this
*/
proto.massa.api.v1.SendBlocksResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.SendBlocksResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendBlocksResponse} returns this
 */
proto.massa.api.v1.SendBlocksResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendBlocksResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SendEndorsementsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendEndorsementsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendEndorsementsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendEndorsementsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    endorsementsList: msg.getEndorsementsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendEndorsementsRequest}
 */
proto.massa.api.v1.SendEndorsementsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendEndorsementsRequest;
  return proto.massa.api.v1.SendEndorsementsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendEndorsementsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendEndorsementsRequest}
 */
proto.massa.api.v1.SendEndorsementsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addEndorsements(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendEndorsementsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendEndorsementsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendEndorsementsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndorsementsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes endorsements = 1;
 * @return {!Array<string>}
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.getEndorsementsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes endorsements = 1;
 * This is a type-conversion wrapper around `getEndorsementsList()`
 * @return {!Array<string>}
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.getEndorsementsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getEndorsementsList()));
};


/**
 * repeated bytes endorsements = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEndorsementsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.getEndorsementsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getEndorsementsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.massa.api.v1.SendEndorsementsRequest} returns this
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.setEndorsementsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.SendEndorsementsRequest} returns this
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.addEndorsements = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SendEndorsementsRequest} returns this
 */
proto.massa.api.v1.SendEndorsementsRequest.prototype.clearEndorsementsList = function() {
  return this.setEndorsementsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.SendEndorsementsResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.massa.api.v1.SendEndorsementsResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  ENDORSEMENT_IDS: 1,
  ERROR: 2
};

/**
 * @return {proto.massa.api.v1.SendEndorsementsResponse.ResultCase}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.getResultCase = function() {
  return /** @type {proto.massa.api.v1.SendEndorsementsResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.SendEndorsementsResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendEndorsementsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendEndorsementsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendEndorsementsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    endorsementIds: (f = msg.getEndorsementIds()) && massa_model_v1_endorsement_pb.EndorsementIds.toObject(includeInstance, f),
    error: (f = msg.getError()) && massa_model_v1_commons_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendEndorsementsResponse}
 */
proto.massa.api.v1.SendEndorsementsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendEndorsementsResponse;
  return proto.massa.api.v1.SendEndorsementsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendEndorsementsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendEndorsementsResponse}
 */
proto.massa.api.v1.SendEndorsementsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_endorsement_pb.EndorsementIds;
      reader.readMessage(value,massa_model_v1_endorsement_pb.EndorsementIds.deserializeBinaryFromReader);
      msg.setEndorsementIds(value);
      break;
    case 2:
      var value = new massa_model_v1_commons_pb.Error;
      reader.readMessage(value,massa_model_v1_commons_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendEndorsementsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendEndorsementsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendEndorsementsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndorsementIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_endorsement_pb.EndorsementIds.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_commons_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.EndorsementIds endorsement_ids = 1;
 * @return {?proto.massa.model.v1.EndorsementIds}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.getEndorsementIds = function() {
  return /** @type{?proto.massa.model.v1.EndorsementIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_endorsement_pb.EndorsementIds, 1));
};


/**
 * @param {?proto.massa.model.v1.EndorsementIds|undefined} value
 * @return {!proto.massa.api.v1.SendEndorsementsResponse} returns this
*/
proto.massa.api.v1.SendEndorsementsResponse.prototype.setEndorsementIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.SendEndorsementsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendEndorsementsResponse} returns this
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.clearEndorsementIds = function() {
  return this.setEndorsementIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.hasEndorsementIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Error error = 2;
 * @return {?proto.massa.model.v1.Error}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.getError = function() {
  return /** @type{?proto.massa.model.v1.Error} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.Error, 2));
};


/**
 * @param {?proto.massa.model.v1.Error|undefined} value
 * @return {!proto.massa.api.v1.SendEndorsementsResponse} returns this
*/
proto.massa.api.v1.SendEndorsementsResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.SendEndorsementsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendEndorsementsResponse} returns this
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendEndorsementsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SendOperationsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationsList: msg.getOperationsList_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendOperationsRequest}
 */
proto.massa.api.v1.SendOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendOperationsRequest;
  return proto.massa.api.v1.SendOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendOperationsRequest}
 */
proto.massa.api.v1.SendOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.addOperations(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationsList_asU8();
  if (f.length > 0) {
    writer.writeRepeatedBytes(
      1,
      f
    );
  }
};


/**
 * repeated bytes operations = 1;
 * @return {!Array<string>}
 */
proto.massa.api.v1.SendOperationsRequest.prototype.getOperationsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * repeated bytes operations = 1;
 * This is a type-conversion wrapper around `getOperationsList()`
 * @return {!Array<string>}
 */
proto.massa.api.v1.SendOperationsRequest.prototype.getOperationsList_asB64 = function() {
  return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(
      this.getOperationsList()));
};


/**
 * repeated bytes operations = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getOperationsList()`
 * @return {!Array<!Uint8Array>}
 */
proto.massa.api.v1.SendOperationsRequest.prototype.getOperationsList_asU8 = function() {
  return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(
      this.getOperationsList()));
};


/**
 * @param {!(Array<!Uint8Array>|Array<string>)} value
 * @return {!proto.massa.api.v1.SendOperationsRequest} returns this
 */
proto.massa.api.v1.SendOperationsRequest.prototype.setOperationsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!(string|Uint8Array)} value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.SendOperationsRequest} returns this
 */
proto.massa.api.v1.SendOperationsRequest.prototype.addOperations = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SendOperationsRequest} returns this
 */
proto.massa.api.v1.SendOperationsRequest.prototype.clearOperationsList = function() {
  return this.setOperationsList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.SendOperationsResponse.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.massa.api.v1.SendOperationsResponse.ResultCase = {
  RESULT_NOT_SET: 0,
  OPERATION_IDS: 1,
  ERROR: 2
};

/**
 * @return {proto.massa.api.v1.SendOperationsResponse.ResultCase}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.getResultCase = function() {
  return /** @type {proto.massa.api.v1.SendOperationsResponse.ResultCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.SendOperationsResponse.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SendOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SendOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationIds: (f = msg.getOperationIds()) && massa_model_v1_operation_pb.OperationIds.toObject(includeInstance, f),
    error: (f = msg.getError()) && massa_model_v1_commons_pb.Error.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SendOperationsResponse}
 */
proto.massa.api.v1.SendOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SendOperationsResponse;
  return proto.massa.api.v1.SendOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SendOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SendOperationsResponse}
 */
proto.massa.api.v1.SendOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_operation_pb.OperationIds;
      reader.readMessage(value,massa_model_v1_operation_pb.OperationIds.deserializeBinaryFromReader);
      msg.setOperationIds(value);
      break;
    case 2:
      var value = new massa_model_v1_commons_pb.Error;
      reader.readMessage(value,massa_model_v1_commons_pb.Error.deserializeBinaryFromReader);
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SendOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SendOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SendOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_operation_pb.OperationIds.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_commons_pb.Error.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.OperationIds operation_ids = 1;
 * @return {?proto.massa.model.v1.OperationIds}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.getOperationIds = function() {
  return /** @type{?proto.massa.model.v1.OperationIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_operation_pb.OperationIds, 1));
};


/**
 * @param {?proto.massa.model.v1.OperationIds|undefined} value
 * @return {!proto.massa.api.v1.SendOperationsResponse} returns this
*/
proto.massa.api.v1.SendOperationsResponse.prototype.setOperationIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.SendOperationsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendOperationsResponse} returns this
 */
proto.massa.api.v1.SendOperationsResponse.prototype.clearOperationIds = function() {
  return this.setOperationIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.hasOperationIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Error error = 2;
 * @return {?proto.massa.model.v1.Error}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.getError = function() {
  return /** @type{?proto.massa.model.v1.Error} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_commons_pb.Error, 2));
};


/**
 * @param {?proto.massa.model.v1.Error|undefined} value
 * @return {!proto.massa.api.v1.SendOperationsResponse} returns this
*/
proto.massa.api.v1.SendOperationsResponse.prototype.setError = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.SendOperationsResponse.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SendOperationsResponse} returns this
 */
proto.massa.api.v1.SendOperationsResponse.prototype.clearError = function() {
  return this.setError(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SendOperationsResponse.prototype.hasError = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.TransactionsThroughputRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.TransactionsThroughputRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.TransactionsThroughputRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    interval: (f = msg.getInterval()) && google_protobuf_wrappers_pb.UInt64Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.TransactionsThroughputRequest}
 */
proto.massa.api.v1.TransactionsThroughputRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.TransactionsThroughputRequest;
  return proto.massa.api.v1.TransactionsThroughputRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.TransactionsThroughputRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.TransactionsThroughputRequest}
 */
proto.massa.api.v1.TransactionsThroughputRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_wrappers_pb.UInt64Value;
      reader.readMessage(value,google_protobuf_wrappers_pb.UInt64Value.deserializeBinaryFromReader);
      msg.setInterval(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.TransactionsThroughputRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.TransactionsThroughputRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.TransactionsThroughputRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInterval();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_wrappers_pb.UInt64Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional google.protobuf.UInt64Value interval = 1;
 * @return {?proto.google.protobuf.UInt64Value}
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.getInterval = function() {
  return /** @type{?proto.google.protobuf.UInt64Value} */ (
    jspb.Message.getWrapperField(this, google_protobuf_wrappers_pb.UInt64Value, 1));
};


/**
 * @param {?proto.google.protobuf.UInt64Value|undefined} value
 * @return {!proto.massa.api.v1.TransactionsThroughputRequest} returns this
*/
proto.massa.api.v1.TransactionsThroughputRequest.prototype.setInterval = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.TransactionsThroughputRequest} returns this
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.clearInterval = function() {
  return this.setInterval(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.TransactionsThroughputRequest.prototype.hasInterval = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.TransactionsThroughputResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.TransactionsThroughputResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.TransactionsThroughputResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.TransactionsThroughputResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    throughput: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.TransactionsThroughputResponse}
 */
proto.massa.api.v1.TransactionsThroughputResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.TransactionsThroughputResponse;
  return proto.massa.api.v1.TransactionsThroughputResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.TransactionsThroughputResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.TransactionsThroughputResponse}
 */
proto.massa.api.v1.TransactionsThroughputResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setThroughput(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.TransactionsThroughputResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.TransactionsThroughputResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.TransactionsThroughputResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.TransactionsThroughputResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getThroughput();
  if (f !== 0) {
    writer.writeUint32(
      1,
      f
    );
  }
};


/**
 * optional uint32 throughput = 1;
 * @return {number}
 */
proto.massa.api.v1.TransactionsThroughputResponse.prototype.getThroughput = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.massa.api.v1.TransactionsThroughputResponse} returns this
 */
proto.massa.api.v1.TransactionsThroughputResponse.prototype.setThroughput = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SearchBlocksRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SearchBlocksRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SearchBlocksRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SearchBlocksRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchBlocksRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.SearchBlocksFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SearchBlocksRequest}
 */
proto.massa.api.v1.SearchBlocksRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SearchBlocksRequest;
  return proto.massa.api.v1.SearchBlocksRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SearchBlocksRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SearchBlocksRequest}
 */
proto.massa.api.v1.SearchBlocksRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.SearchBlocksFilter;
      reader.readMessage(value,proto.massa.api.v1.SearchBlocksFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SearchBlocksRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SearchBlocksRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SearchBlocksRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchBlocksRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.SearchBlocksFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SearchBlocksFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.SearchBlocksFilter>}
 */
proto.massa.api.v1.SearchBlocksRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.SearchBlocksFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.SearchBlocksFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.SearchBlocksFilter>} value
 * @return {!proto.massa.api.v1.SearchBlocksRequest} returns this
*/
proto.massa.api.v1.SearchBlocksRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.SearchBlocksFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.SearchBlocksFilter}
 */
proto.massa.api.v1.SearchBlocksRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.SearchBlocksFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SearchBlocksRequest} returns this
 */
proto.massa.api.v1.SearchBlocksRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.SearchBlocksFilter.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.massa.api.v1.SearchBlocksFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  BLOCK_IDS: 1,
  ADDRESSES: 2,
  SLOT_RANGE: 3
};

/**
 * @return {proto.massa.api.v1.SearchBlocksFilter.FilterCase}
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.SearchBlocksFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.SearchBlocksFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SearchBlocksFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SearchBlocksFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchBlocksFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockIds: (f = msg.getBlockIds()) && massa_model_v1_block_pb.BlockIds.toObject(includeInstance, f),
    addresses: (f = msg.getAddresses()) && massa_model_v1_address_pb.Addresses.toObject(includeInstance, f),
    slotRange: (f = msg.getSlotRange()) && massa_model_v1_slot_pb.SlotRange.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SearchBlocksFilter}
 */
proto.massa.api.v1.SearchBlocksFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SearchBlocksFilter;
  return proto.massa.api.v1.SearchBlocksFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SearchBlocksFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SearchBlocksFilter}
 */
proto.massa.api.v1.SearchBlocksFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_block_pb.BlockIds;
      reader.readMessage(value,massa_model_v1_block_pb.BlockIds.deserializeBinaryFromReader);
      msg.setBlockIds(value);
      break;
    case 2:
      var value = new massa_model_v1_address_pb.Addresses;
      reader.readMessage(value,massa_model_v1_address_pb.Addresses.deserializeBinaryFromReader);
      msg.setAddresses(value);
      break;
    case 3:
      var value = new massa_model_v1_slot_pb.SlotRange;
      reader.readMessage(value,massa_model_v1_slot_pb.SlotRange.deserializeBinaryFromReader);
      msg.setSlotRange(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SearchBlocksFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SearchBlocksFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchBlocksFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_block_pb.BlockIds.serializeBinaryToWriter
    );
  }
  f = message.getAddresses();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_address_pb.Addresses.serializeBinaryToWriter
    );
  }
  f = message.getSlotRange();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      massa_model_v1_slot_pb.SlotRange.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.BlockIds block_ids = 1;
 * @return {?proto.massa.model.v1.BlockIds}
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.getBlockIds = function() {
  return /** @type{?proto.massa.model.v1.BlockIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_block_pb.BlockIds, 1));
};


/**
 * @param {?proto.massa.model.v1.BlockIds|undefined} value
 * @return {!proto.massa.api.v1.SearchBlocksFilter} returns this
*/
proto.massa.api.v1.SearchBlocksFilter.prototype.setBlockIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.SearchBlocksFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SearchBlocksFilter} returns this
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.clearBlockIds = function() {
  return this.setBlockIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.hasBlockIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Addresses addresses = 2;
 * @return {?proto.massa.model.v1.Addresses}
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.getAddresses = function() {
  return /** @type{?proto.massa.model.v1.Addresses} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_address_pb.Addresses, 2));
};


/**
 * @param {?proto.massa.model.v1.Addresses|undefined} value
 * @return {!proto.massa.api.v1.SearchBlocksFilter} returns this
*/
proto.massa.api.v1.SearchBlocksFilter.prototype.setAddresses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.SearchBlocksFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SearchBlocksFilter} returns this
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.clearAddresses = function() {
  return this.setAddresses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.hasAddresses = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional massa.model.v1.SlotRange slot_range = 3;
 * @return {?proto.massa.model.v1.SlotRange}
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.getSlotRange = function() {
  return /** @type{?proto.massa.model.v1.SlotRange} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_slot_pb.SlotRange, 3));
};


/**
 * @param {?proto.massa.model.v1.SlotRange|undefined} value
 * @return {!proto.massa.api.v1.SearchBlocksFilter} returns this
*/
proto.massa.api.v1.SearchBlocksFilter.prototype.setSlotRange = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.SearchBlocksFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SearchBlocksFilter} returns this
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.clearSlotRange = function() {
  return this.setSlotRange(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SearchBlocksFilter.prototype.hasSlotRange = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SearchBlocksResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SearchBlocksResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SearchBlocksResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SearchBlocksResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchBlocksResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    blockInfosList: jspb.Message.toObjectList(msg.getBlockInfosList(),
    massa_model_v1_block_pb.BlockInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SearchBlocksResponse}
 */
proto.massa.api.v1.SearchBlocksResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SearchBlocksResponse;
  return proto.massa.api.v1.SearchBlocksResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SearchBlocksResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SearchBlocksResponse}
 */
proto.massa.api.v1.SearchBlocksResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_block_pb.BlockInfo;
      reader.readMessage(value,massa_model_v1_block_pb.BlockInfo.deserializeBinaryFromReader);
      msg.addBlockInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SearchBlocksResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SearchBlocksResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SearchBlocksResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchBlocksResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBlockInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_block_pb.BlockInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.BlockInfo block_infos = 1;
 * @return {!Array<!proto.massa.model.v1.BlockInfo>}
 */
proto.massa.api.v1.SearchBlocksResponse.prototype.getBlockInfosList = function() {
  return /** @type{!Array<!proto.massa.model.v1.BlockInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_block_pb.BlockInfo, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.BlockInfo>} value
 * @return {!proto.massa.api.v1.SearchBlocksResponse} returns this
*/
proto.massa.api.v1.SearchBlocksResponse.prototype.setBlockInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.BlockInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.BlockInfo}
 */
proto.massa.api.v1.SearchBlocksResponse.prototype.addBlockInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.BlockInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SearchBlocksResponse} returns this
 */
proto.massa.api.v1.SearchBlocksResponse.prototype.clearBlockInfosList = function() {
  return this.setBlockInfosList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SearchEndorsementsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SearchEndorsementsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SearchEndorsementsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SearchEndorsementsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchEndorsementsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.SearchEndorsementsFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SearchEndorsementsRequest}
 */
proto.massa.api.v1.SearchEndorsementsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SearchEndorsementsRequest;
  return proto.massa.api.v1.SearchEndorsementsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SearchEndorsementsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SearchEndorsementsRequest}
 */
proto.massa.api.v1.SearchEndorsementsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.SearchEndorsementsFilter;
      reader.readMessage(value,proto.massa.api.v1.SearchEndorsementsFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SearchEndorsementsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SearchEndorsementsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SearchEndorsementsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchEndorsementsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.SearchEndorsementsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SearchEndorsementsFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.SearchEndorsementsFilter>}
 */
proto.massa.api.v1.SearchEndorsementsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.SearchEndorsementsFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.SearchEndorsementsFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.SearchEndorsementsFilter>} value
 * @return {!proto.massa.api.v1.SearchEndorsementsRequest} returns this
*/
proto.massa.api.v1.SearchEndorsementsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.SearchEndorsementsFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.SearchEndorsementsFilter}
 */
proto.massa.api.v1.SearchEndorsementsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.SearchEndorsementsFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SearchEndorsementsRequest} returns this
 */
proto.massa.api.v1.SearchEndorsementsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.SearchEndorsementsFilter.oneofGroups_ = [[1,2,3]];

/**
 * @enum {number}
 */
proto.massa.api.v1.SearchEndorsementsFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  ENDORSEMENT_IDS: 1,
  ADDRESSES: 2,
  BLOCK_IDS: 3
};

/**
 * @return {proto.massa.api.v1.SearchEndorsementsFilter.FilterCase}
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.SearchEndorsementsFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.SearchEndorsementsFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SearchEndorsementsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SearchEndorsementsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchEndorsementsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    endorsementIds: (f = msg.getEndorsementIds()) && massa_model_v1_endorsement_pb.EndorsementIds.toObject(includeInstance, f),
    addresses: (f = msg.getAddresses()) && massa_model_v1_address_pb.Addresses.toObject(includeInstance, f),
    blockIds: (f = msg.getBlockIds()) && massa_model_v1_block_pb.BlockIds.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SearchEndorsementsFilter}
 */
proto.massa.api.v1.SearchEndorsementsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SearchEndorsementsFilter;
  return proto.massa.api.v1.SearchEndorsementsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SearchEndorsementsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SearchEndorsementsFilter}
 */
proto.massa.api.v1.SearchEndorsementsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_endorsement_pb.EndorsementIds;
      reader.readMessage(value,massa_model_v1_endorsement_pb.EndorsementIds.deserializeBinaryFromReader);
      msg.setEndorsementIds(value);
      break;
    case 2:
      var value = new massa_model_v1_address_pb.Addresses;
      reader.readMessage(value,massa_model_v1_address_pb.Addresses.deserializeBinaryFromReader);
      msg.setAddresses(value);
      break;
    case 3:
      var value = new massa_model_v1_block_pb.BlockIds;
      reader.readMessage(value,massa_model_v1_block_pb.BlockIds.deserializeBinaryFromReader);
      msg.setBlockIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SearchEndorsementsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SearchEndorsementsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchEndorsementsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndorsementIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_endorsement_pb.EndorsementIds.serializeBinaryToWriter
    );
  }
  f = message.getAddresses();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_address_pb.Addresses.serializeBinaryToWriter
    );
  }
  f = message.getBlockIds();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      massa_model_v1_block_pb.BlockIds.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.EndorsementIds endorsement_ids = 1;
 * @return {?proto.massa.model.v1.EndorsementIds}
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.getEndorsementIds = function() {
  return /** @type{?proto.massa.model.v1.EndorsementIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_endorsement_pb.EndorsementIds, 1));
};


/**
 * @param {?proto.massa.model.v1.EndorsementIds|undefined} value
 * @return {!proto.massa.api.v1.SearchEndorsementsFilter} returns this
*/
proto.massa.api.v1.SearchEndorsementsFilter.prototype.setEndorsementIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.SearchEndorsementsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SearchEndorsementsFilter} returns this
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.clearEndorsementIds = function() {
  return this.setEndorsementIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.hasEndorsementIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Addresses addresses = 2;
 * @return {?proto.massa.model.v1.Addresses}
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.getAddresses = function() {
  return /** @type{?proto.massa.model.v1.Addresses} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_address_pb.Addresses, 2));
};


/**
 * @param {?proto.massa.model.v1.Addresses|undefined} value
 * @return {!proto.massa.api.v1.SearchEndorsementsFilter} returns this
*/
proto.massa.api.v1.SearchEndorsementsFilter.prototype.setAddresses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.SearchEndorsementsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SearchEndorsementsFilter} returns this
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.clearAddresses = function() {
  return this.setAddresses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.hasAddresses = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional massa.model.v1.BlockIds block_ids = 3;
 * @return {?proto.massa.model.v1.BlockIds}
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.getBlockIds = function() {
  return /** @type{?proto.massa.model.v1.BlockIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_block_pb.BlockIds, 3));
};


/**
 * @param {?proto.massa.model.v1.BlockIds|undefined} value
 * @return {!proto.massa.api.v1.SearchEndorsementsFilter} returns this
*/
proto.massa.api.v1.SearchEndorsementsFilter.prototype.setBlockIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 3, proto.massa.api.v1.SearchEndorsementsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SearchEndorsementsFilter} returns this
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.clearBlockIds = function() {
  return this.setBlockIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SearchEndorsementsFilter.prototype.hasBlockIds = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SearchEndorsementsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SearchEndorsementsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SearchEndorsementsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SearchEndorsementsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchEndorsementsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    endorsementInfosList: jspb.Message.toObjectList(msg.getEndorsementInfosList(),
    massa_model_v1_endorsement_pb.EndorsementInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SearchEndorsementsResponse}
 */
proto.massa.api.v1.SearchEndorsementsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SearchEndorsementsResponse;
  return proto.massa.api.v1.SearchEndorsementsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SearchEndorsementsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SearchEndorsementsResponse}
 */
proto.massa.api.v1.SearchEndorsementsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_endorsement_pb.EndorsementInfo;
      reader.readMessage(value,massa_model_v1_endorsement_pb.EndorsementInfo.deserializeBinaryFromReader);
      msg.addEndorsementInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SearchEndorsementsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SearchEndorsementsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SearchEndorsementsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchEndorsementsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEndorsementInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_endorsement_pb.EndorsementInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.EndorsementInfo endorsement_infos = 1;
 * @return {!Array<!proto.massa.model.v1.EndorsementInfo>}
 */
proto.massa.api.v1.SearchEndorsementsResponse.prototype.getEndorsementInfosList = function() {
  return /** @type{!Array<!proto.massa.model.v1.EndorsementInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_endorsement_pb.EndorsementInfo, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.EndorsementInfo>} value
 * @return {!proto.massa.api.v1.SearchEndorsementsResponse} returns this
*/
proto.massa.api.v1.SearchEndorsementsResponse.prototype.setEndorsementInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.EndorsementInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.EndorsementInfo}
 */
proto.massa.api.v1.SearchEndorsementsResponse.prototype.addEndorsementInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.EndorsementInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SearchEndorsementsResponse} returns this
 */
proto.massa.api.v1.SearchEndorsementsResponse.prototype.clearEndorsementInfosList = function() {
  return this.setEndorsementInfosList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SearchOperationsRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SearchOperationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SearchOperationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SearchOperationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchOperationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    filtersList: jspb.Message.toObjectList(msg.getFiltersList(),
    proto.massa.api.v1.SearchOperationsFilter.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SearchOperationsRequest}
 */
proto.massa.api.v1.SearchOperationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SearchOperationsRequest;
  return proto.massa.api.v1.SearchOperationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SearchOperationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SearchOperationsRequest}
 */
proto.massa.api.v1.SearchOperationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.massa.api.v1.SearchOperationsFilter;
      reader.readMessage(value,proto.massa.api.v1.SearchOperationsFilter.deserializeBinaryFromReader);
      msg.addFilters(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SearchOperationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SearchOperationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SearchOperationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchOperationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFiltersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.massa.api.v1.SearchOperationsFilter.serializeBinaryToWriter
    );
  }
};


/**
 * repeated SearchOperationsFilter filters = 1;
 * @return {!Array<!proto.massa.api.v1.SearchOperationsFilter>}
 */
proto.massa.api.v1.SearchOperationsRequest.prototype.getFiltersList = function() {
  return /** @type{!Array<!proto.massa.api.v1.SearchOperationsFilter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.massa.api.v1.SearchOperationsFilter, 1));
};


/**
 * @param {!Array<!proto.massa.api.v1.SearchOperationsFilter>} value
 * @return {!proto.massa.api.v1.SearchOperationsRequest} returns this
*/
proto.massa.api.v1.SearchOperationsRequest.prototype.setFiltersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.api.v1.SearchOperationsFilter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.api.v1.SearchOperationsFilter}
 */
proto.massa.api.v1.SearchOperationsRequest.prototype.addFilters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.api.v1.SearchOperationsFilter, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SearchOperationsRequest} returns this
 */
proto.massa.api.v1.SearchOperationsRequest.prototype.clearFiltersList = function() {
  return this.setFiltersList([]);
};



/**
 * Oneof group definitions for this message. Each group defines the field
 * numbers belonging to that group. When of these fields' value is set, all
 * other fields in the group are cleared. During deserialization, if multiple
 * fields are encountered for a group, only the last value seen will be kept.
 * @private {!Array<!Array<number>>}
 * @const
 */
proto.massa.api.v1.SearchOperationsFilter.oneofGroups_ = [[1,2]];

/**
 * @enum {number}
 */
proto.massa.api.v1.SearchOperationsFilter.FilterCase = {
  FILTER_NOT_SET: 0,
  OPERATION_IDS: 1,
  ADDRESSES: 2
};

/**
 * @return {proto.massa.api.v1.SearchOperationsFilter.FilterCase}
 */
proto.massa.api.v1.SearchOperationsFilter.prototype.getFilterCase = function() {
  return /** @type {proto.massa.api.v1.SearchOperationsFilter.FilterCase} */(jspb.Message.computeOneofCase(this, proto.massa.api.v1.SearchOperationsFilter.oneofGroups_[0]));
};



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SearchOperationsFilter.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SearchOperationsFilter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SearchOperationsFilter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchOperationsFilter.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationIds: (f = msg.getOperationIds()) && massa_model_v1_operation_pb.OperationIds.toObject(includeInstance, f),
    addresses: (f = msg.getAddresses()) && massa_model_v1_address_pb.Addresses.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SearchOperationsFilter}
 */
proto.massa.api.v1.SearchOperationsFilter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SearchOperationsFilter;
  return proto.massa.api.v1.SearchOperationsFilter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SearchOperationsFilter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SearchOperationsFilter}
 */
proto.massa.api.v1.SearchOperationsFilter.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_operation_pb.OperationIds;
      reader.readMessage(value,massa_model_v1_operation_pb.OperationIds.deserializeBinaryFromReader);
      msg.setOperationIds(value);
      break;
    case 2:
      var value = new massa_model_v1_address_pb.Addresses;
      reader.readMessage(value,massa_model_v1_address_pb.Addresses.deserializeBinaryFromReader);
      msg.setAddresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SearchOperationsFilter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SearchOperationsFilter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SearchOperationsFilter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchOperationsFilter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationIds();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      massa_model_v1_operation_pb.OperationIds.serializeBinaryToWriter
    );
  }
  f = message.getAddresses();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      massa_model_v1_address_pb.Addresses.serializeBinaryToWriter
    );
  }
};


/**
 * optional massa.model.v1.OperationIds operation_ids = 1;
 * @return {?proto.massa.model.v1.OperationIds}
 */
proto.massa.api.v1.SearchOperationsFilter.prototype.getOperationIds = function() {
  return /** @type{?proto.massa.model.v1.OperationIds} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_operation_pb.OperationIds, 1));
};


/**
 * @param {?proto.massa.model.v1.OperationIds|undefined} value
 * @return {!proto.massa.api.v1.SearchOperationsFilter} returns this
*/
proto.massa.api.v1.SearchOperationsFilter.prototype.setOperationIds = function(value) {
  return jspb.Message.setOneofWrapperField(this, 1, proto.massa.api.v1.SearchOperationsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SearchOperationsFilter} returns this
 */
proto.massa.api.v1.SearchOperationsFilter.prototype.clearOperationIds = function() {
  return this.setOperationIds(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SearchOperationsFilter.prototype.hasOperationIds = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional massa.model.v1.Addresses addresses = 2;
 * @return {?proto.massa.model.v1.Addresses}
 */
proto.massa.api.v1.SearchOperationsFilter.prototype.getAddresses = function() {
  return /** @type{?proto.massa.model.v1.Addresses} */ (
    jspb.Message.getWrapperField(this, massa_model_v1_address_pb.Addresses, 2));
};


/**
 * @param {?proto.massa.model.v1.Addresses|undefined} value
 * @return {!proto.massa.api.v1.SearchOperationsFilter} returns this
*/
proto.massa.api.v1.SearchOperationsFilter.prototype.setAddresses = function(value) {
  return jspb.Message.setOneofWrapperField(this, 2, proto.massa.api.v1.SearchOperationsFilter.oneofGroups_[0], value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.massa.api.v1.SearchOperationsFilter} returns this
 */
proto.massa.api.v1.SearchOperationsFilter.prototype.clearAddresses = function() {
  return this.setAddresses(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.massa.api.v1.SearchOperationsFilter.prototype.hasAddresses = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.massa.api.v1.SearchOperationsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.massa.api.v1.SearchOperationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.massa.api.v1.SearchOperationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.massa.api.v1.SearchOperationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchOperationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    operationInfosList: jspb.Message.toObjectList(msg.getOperationInfosList(),
    massa_model_v1_operation_pb.OperationInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.massa.api.v1.SearchOperationsResponse}
 */
proto.massa.api.v1.SearchOperationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.massa.api.v1.SearchOperationsResponse;
  return proto.massa.api.v1.SearchOperationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.massa.api.v1.SearchOperationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.massa.api.v1.SearchOperationsResponse}
 */
proto.massa.api.v1.SearchOperationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new massa_model_v1_operation_pb.OperationInfo;
      reader.readMessage(value,massa_model_v1_operation_pb.OperationInfo.deserializeBinaryFromReader);
      msg.addOperationInfos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.massa.api.v1.SearchOperationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.massa.api.v1.SearchOperationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.massa.api.v1.SearchOperationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.massa.api.v1.SearchOperationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOperationInfosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      massa_model_v1_operation_pb.OperationInfo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated massa.model.v1.OperationInfo operation_infos = 1;
 * @return {!Array<!proto.massa.model.v1.OperationInfo>}
 */
proto.massa.api.v1.SearchOperationsResponse.prototype.getOperationInfosList = function() {
  return /** @type{!Array<!proto.massa.model.v1.OperationInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, massa_model_v1_operation_pb.OperationInfo, 1));
};


/**
 * @param {!Array<!proto.massa.model.v1.OperationInfo>} value
 * @return {!proto.massa.api.v1.SearchOperationsResponse} returns this
*/
proto.massa.api.v1.SearchOperationsResponse.prototype.setOperationInfosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.massa.model.v1.OperationInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.massa.model.v1.OperationInfo}
 */
proto.massa.api.v1.SearchOperationsResponse.prototype.addOperationInfos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.massa.model.v1.OperationInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.massa.api.v1.SearchOperationsResponse} returns this
 */
proto.massa.api.v1.SearchOperationsResponse.prototype.clearOperationInfosList = function() {
  return this.setOperationInfosList([]);
};


/**
 * @enum {number}
 */
proto.massa.api.v1.ExecutionQueryExecutionStatus = {
  EXECUTION_QUERY_EXECUTION_STATUS_UNSPECIFIED: 0,
  EXECUTION_QUERY_EXECUTION_STATUS_ALREADY_EXECUTED_WITH_SUCCESS: 1,
  EXECUTION_QUERY_EXECUTION_STATUS_ALREADY_EXECUTED_WITH_FAILURE: 2,
  EXECUTION_QUERY_EXECUTION_STATUS_EXECUTABLE_OR_EXPIRED: 3
};

goog.object.extend(exports, proto.massa.api.v1);

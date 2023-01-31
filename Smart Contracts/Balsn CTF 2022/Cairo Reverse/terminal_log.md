```cairo
$ thoth -f contract_compiled.json -d -color

%builtins pedersen range_check
struct __main__.get_flag.Args:
        member t : felt
end

struct __main__.get_flag.ImplicitArgs:
        member syscall_ptr : felt*
        member pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*
        member range_check_ptr : felt
end

struct __wrappers__.get_flag_encode_return.Args:
        member ret_value : (res : felt)
        member range_check_ptr : felt
end

struct starkware.cairo.common.cairo_builtins.BitwiseBuiltin:
        member x : felt
        member y : felt
        member x_and_y : felt
        member x_xor_y : felt
        member x_or_y : felt
end

struct starkware.cairo.common.cairo_builtins.EcOpBuiltin:
        member p : starkware.cairo.common.ec_point.EcPoint
        member q : starkware.cairo.common.ec_point.EcPoint
        member m : felt
        member r : starkware.cairo.common.ec_point.EcPoint
end

struct starkware.cairo.common.cairo_builtins.HashBuiltin:
        member x : felt
        member y : felt
        member result : felt
end

struct starkware.cairo.common.cairo_builtins.SignatureBuiltin:
        member pub_key : felt
        member message : felt
end

struct starkware.cairo.common.dict_access.DictAccess:
        member key : felt
        member prev_value : felt
        member new_value : felt
end

struct starkware.cairo.common.ec_point.EcPoint:
        member x : felt
        member y : felt
end

struct starkware.starknet.common.syscalls.CallContract:
        member request : starkware.starknet.common.syscalls.CallContractRequest
        member response : starkware.starknet.common.syscalls.CallContractResponse
end

struct starkware.starknet.common.syscalls.CallContractRequest:
        member selector : felt
        member contract_address : felt
        member function_selector : felt
        member calldata_size : felt
        member calldata : felt*
end

struct starkware.starknet.common.syscalls.CallContractResponse:
        member retdata_size : felt
        member retdata : felt*
end

struct starkware.starknet.common.syscalls.Deploy:
        member request : starkware.starknet.common.syscalls.DeployRequest
        member response : starkware.starknet.common.syscalls.DeployResponse
end

struct starkware.starknet.common.syscalls.DeployRequest:
        member selector : felt
        member class_hash : felt
        member contract_address_salt : felt
        member constructor_calldata_size : felt
        member constructor_calldata : felt*
        member deploy_from_zero : felt
end

struct starkware.starknet.common.syscalls.DeployResponse:
        member contract_address : felt
        member constructor_retdata_size : felt
        member constructor_retdata : felt*
end

struct starkware.starknet.common.syscalls.EmitEvent:
        member selector : felt
        member keys_len : felt
        member keys : felt*
        member data_len : felt
        member data : felt*
end

struct starkware.starknet.common.syscalls.GetBlockNumber:
        member request : starkware.starknet.common.syscalls.GetBlockNumberRequest
        member response : starkware.starknet.common.syscalls.GetBlockNumberResponse
end

struct starkware.starknet.common.syscalls.GetBlockNumberRequest:
        member selector : felt
end

struct starkware.starknet.common.syscalls.GetBlockNumberResponse:
        member block_number : felt
end

struct starkware.starknet.common.syscalls.GetBlockTimestamp:
        member request : starkware.starknet.common.syscalls.GetBlockTimestampRequest
        member response : starkware.starknet.common.syscalls.GetBlockTimestampResponse
end

struct starkware.starknet.common.syscalls.GetBlockTimestampRequest:
        member selector : felt
end

struct starkware.starknet.common.syscalls.GetBlockTimestampResponse:
        member block_timestamp : felt
end

struct starkware.starknet.common.syscalls.GetCallerAddress:
        member request : starkware.starknet.common.syscalls.GetCallerAddressRequest
        member response : starkware.starknet.common.syscalls.GetCallerAddressResponse
end

struct starkware.starknet.common.syscalls.GetCallerAddressRequest:
        member selector : felt
end

struct starkware.starknet.common.syscalls.GetCallerAddressResponse:
        member caller_address : felt
end

struct starkware.starknet.common.syscalls.GetContractAddress:
        member request : starkware.starknet.common.syscalls.GetContractAddressRequest
        member response : starkware.starknet.common.syscalls.GetContractAddressResponse
end

struct starkware.starknet.common.syscalls.GetContractAddressRequest:
        member selector : felt
end

struct starkware.starknet.common.syscalls.GetContractAddressResponse:
        member contract_address : felt
end

struct starkware.starknet.common.syscalls.GetSequencerAddress:
        member request : starkware.starknet.common.syscalls.GetSequencerAddressRequest
        member response : starkware.starknet.common.syscalls.GetSequencerAddressResponse
end

struct starkware.starknet.common.syscalls.GetSequencerAddressRequest:
        member selector : felt
end

struct starkware.starknet.common.syscalls.GetSequencerAddressResponse:
        member sequencer_address : felt
end

struct starkware.starknet.common.syscalls.GetTxInfo:
        member request : starkware.starknet.common.syscalls.GetTxInfoRequest
        member response : starkware.starknet.common.syscalls.GetTxInfoResponse
end

struct starkware.starknet.common.syscalls.GetTxInfoRequest:
        member selector : felt
end

struct starkware.starknet.common.syscalls.GetTxInfoResponse:
        member tx_info : starkware.starknet.common.syscalls.TxInfo*
end

struct starkware.starknet.common.syscalls.GetTxSignature:
        member request : starkware.starknet.common.syscalls.GetTxSignatureRequest
        member response : starkware.starknet.common.syscalls.GetTxSignatureResponse
end

struct starkware.starknet.common.syscalls.GetTxSignatureRequest:
        member selector : felt
end

struct starkware.starknet.common.syscalls.GetTxSignatureResponse:
        member signature_len : felt
        member signature : felt*
end

struct starkware.starknet.common.syscalls.LibraryCall:
        member request : starkware.starknet.common.syscalls.LibraryCallRequest
        member response : starkware.starknet.common.syscalls.CallContractResponse
end

struct starkware.starknet.common.syscalls.LibraryCallRequest:
        member selector : felt
        member class_hash : felt
        member function_selector : felt
        member calldata_size : felt
        member calldata : felt*
end

struct starkware.starknet.common.syscalls.SendMessageToL1SysCall:
        member selector : felt
        member to_address : felt
        member payload_size : felt
        member payload_ptr : felt*
end

struct starkware.starknet.common.syscalls.StorageRead:
        member request : starkware.starknet.common.syscalls.StorageReadRequest
        member response : starkware.starknet.common.syscalls.StorageReadResponse
end

struct starkware.starknet.common.syscalls.StorageReadRequest:
        member selector : felt
        member address : felt
end

struct starkware.starknet.common.syscalls.StorageReadResponse:
        member value : felt
end

struct starkware.starknet.common.syscalls.StorageWrite:
        member selector : felt
        member address : felt
        member value : felt
end

struct starkware.starknet.common.syscalls.TxInfo:
        member version : felt
        member account_contract_address : felt
        member max_fee : felt
        member signature_len : felt
        member signature : felt*
        member transaction_hash : felt
        member chain_id : felt
end



@view func __main__.get_flag{syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt}(t : felt) -> (res : felt)
    [AP] = [FP-3] + -0x1d6e61c2969f782ede8c3;    ap ++
    if [AP-1] == 0:
        [AP] =  [FP-3] * [FP-3];        ap ++
        [AP] = [FP-6];        ap ++
        [AP] = [FP-5];        ap ++
        [AP] = [FP-4];        ap ++
        [AP] = [AP-4] + 0x42414c534e7b6f032fa620b5c520ff47733c3723ebc79890c26af4;        ap ++
        return([ap-1])

    end
    [AP] = [FP-6];    ap ++
    [AP] = [FP-5];    ap ++
    [AP] = [FP-4];    ap ++
    # 0 -> 0x0
    [AP] = 0;    ap ++
    return([ap-1])
end

func __wrappers__.get_flag_encode_return{}(ret_value : (res : felt), range_check_ptr : felt) -> (range_check_ptr : felt, data_len : felt, data : felt*)
    %{
        memory[ap] = segments.add()
    %}

    [FP-4] = [[FP]]
    [AP] = [FP] + 1;    ap ++
    [AP] = [FP-3];    ap ++
    [AP-2] =  [AP] + [FP];    ap ++
    [AP] = [FP];    ap ++
    return([ap-3], [ap-2], [ap-1])
end

@view func __wrappers__.get_flag{}() -> (syscall_ptr : felt*, pedersen_ptr : starkware.cairo.common.cairo_builtins.HashBuiltin*, range_check_ptr : felt, size : felt, retdata : felt*)
    [AP] = [FP-3] + 1;    ap ++
    [AP-1] =  [FP-4] + [FP-3]
    [AP] = [[FP-5]];    ap ++
    [AP] = [[FP-5]+1];    ap ++
    [AP] = [[FP-5]+2];    ap ++
    [AP] = [[FP-3]];    ap ++
    get_flag([ap-4], [ap-3], [ap-2], [ap-1])
    [AP] = [AP-2];    ap ++
    get_flag_encode_return([ap-2], [ap-1])
    [AP] = [AP-12];    ap ++
    [AP] = [AP-12];    ap ++
    [AP] = [AP-5];    ap ++
    [AP] = [AP-5];    ap ++
    [AP] = [AP-5];    ap ++
    return([ap-5], [ap-4], [ap-3], [ap-2], [ap-1])
end
```
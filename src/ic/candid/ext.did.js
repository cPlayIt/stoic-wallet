export default ({ IDL }) => {
  const TokenIndex_2 = IDL.Nat32;
  const TokenIndex = TokenIndex_2;
  const AccountIdentifier_2 = IDL.Text;
  const AccountIdentifier = AccountIdentifier_2;
  const AccountIdentifier_3 = AccountIdentifier;
  const Metadata_2 = IDL.Variant({
    'fungible' : IDL.Record({
      'decimals' : IDL.Nat8,
      'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
      'name' : IDL.Text,
      'symbol' : IDL.Text,
    }),
    'nonfungible' : IDL.Record({ 'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)) }),
  });
  const Metadata = Metadata_2;
  const TokenIdentifier = IDL.Text;
  const User = IDL.Variant({
    'principal' : IDL.Principal,
    'address' : AccountIdentifier,
  });
  const BalanceRequest_2 = IDL.Record({
    'token' : TokenIdentifier,
    'user' : User,
  });
  const BalanceRequest = BalanceRequest_2;
  const Balance = IDL.Nat;
  const CommonError_2 = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result_9 = IDL.Variant({ 'ok' : Balance, 'err' : CommonError_2 });
  const BalanceResponse_2 = Result_9;
  const BalanceResponse = BalanceResponse_2;
  const TokenIdentifier_2 = TokenIdentifier;
  const CommonError = CommonError_2;
  const Result_6 = IDL.Variant({
    'ok' : AccountIdentifier_3,
    'err' : CommonError,
  });
  const Time_2 = IDL.Int;
  const Time = Time_2;
  const Listing = IDL.Record({
    'locked' : IDL.Opt(Time),
    'seller' : IDL.Principal,
    'price' : IDL.Nat64,
  });
  const Result_8 = IDL.Variant({
    'ok' : IDL.Tuple(AccountIdentifier_3, IDL.Opt(Listing)),
    'err' : CommonError,
  });
  const User_2 = User;
  const Extension_2 = IDL.Text;
  const Extension = Extension_2;
  const HeaderField = IDL.Tuple(IDL.Text, IDL.Text);
  const HttpRequest = IDL.Record({
    'url' : IDL.Text,
    'method' : IDL.Text,
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
  });
  const HttpResponse = IDL.Record({
    'body' : IDL.Vec(IDL.Nat8),
    'headers' : IDL.Vec(HeaderField),
    'status_code' : IDL.Nat16,
  });
  const Result_7 = IDL.Variant({ 'ok' : TokenIndex, 'err' : CommonError });
  const SubAccount_2 = IDL.Vec(IDL.Nat8);
  const SubAccount = SubAccount_2;
  const SubAccount_3 = SubAccount;
  const ListRequest = IDL.Record({
    'token' : TokenIdentifier_2,
    'from_subaccount' : IDL.Opt(SubAccount_3),
    'price' : IDL.Opt(IDL.Nat64),
  });
  const Result_4 = IDL.Variant({ 'ok' : IDL.Null, 'err' : CommonError });
  const Result_5 = IDL.Variant({ 'ok' : Metadata, 'err' : CommonError });
  const MintRequest_2 = IDL.Record({
    'to' : User,
    'metadata' : IDL.Opt(IDL.Vec(IDL.Nat8)),
  });
  const MintRequest = MintRequest_2;
  const Balance_2 = Balance;
  const Result_3 = IDL.Variant({ 'ok' : Balance_2, 'err' : CommonError });
  const Result_2 = IDL.Variant({
    'ok' : IDL.Vec(TokenIndex),
    'err' : CommonError,
  });
  const Memo = IDL.Vec(IDL.Nat8);
  const TransferRequest_2 = IDL.Record({
    'to' : User,
    'token' : TokenIdentifier,
    'notify' : IDL.Bool,
    'from' : User,
    'memo' : Memo,
    'subaccount' : IDL.Opt(SubAccount),
    'amount' : Balance,
  });
  const TransferRequest = TransferRequest_2;
  const Result = IDL.Variant({
    'ok' : Balance,
    'err' : IDL.Variant({
      'CannotNotify' : AccountIdentifier,
      'InsufficientBalance' : IDL.Null,
      'InvalidToken' : TokenIdentifier,
      'Rejected' : IDL.Null,
      'Unauthorized' : AccountIdentifier,
      'Other' : IDL.Text,
    }),
  });
  const TransferResponse_2 = Result;
  const TransferResponse = TransferResponse_2;
  const erc721_token = IDL.Service({
    'acceptCycles' : IDL.Func([], [], []),
    'availableCycles' : IDL.Func([], [IDL.Nat], ['query']),
    'backup' : IDL.Func(
        [],
        [
          IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier_3)),
          IDL.Vec(IDL.Tuple(AccountIdentifier_3, IDL.Vec(TokenIndex))),
          IDL.Vec(IDL.Tuple(TokenIndex, Metadata)),
        ],
        ['query'],
      ),
    'balance' : IDL.Func([BalanceRequest], [BalanceResponse], ['query']),
    'bearer' : IDL.Func([TokenIdentifier_2], [Result_6], ['query']),
    'details' : IDL.Func([TokenIdentifier_2], [Result_8], ['query']),
    'disribute' : IDL.Func([User_2], [], []),
    'extensions' : IDL.Func([], [IDL.Vec(Extension)], ['query']),
    'freeGift' : IDL.Func([AccountIdentifier_3], [IDL.Opt(TokenIndex)], []),
    'getBuyers' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(AccountIdentifier_3, IDL.Vec(TokenIndex)))],
        ['query'],
      ),
    'getMinted' : IDL.Func([], [TokenIndex], ['query']),
    'getMinter' : IDL.Func([], [IDL.Principal], ['query']),
    'getRegistry' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier_3))],
        ['query'],
      ),
    'getSold' : IDL.Func([], [TokenIndex], ['query']),
    'getTokens' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, Metadata))],
        ['query'],
      ),
    'http_request' : IDL.Func([HttpRequest], [HttpResponse], ['query']),
    'index' : IDL.Func([TokenIdentifier_2], [Result_7], ['query']),
    'list' : IDL.Func([ListRequest], [Result_4], []),
    'listings' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, Listing, Metadata))],
        ['query'],
      ),
    'lock' : IDL.Func(
        [TokenIdentifier_2, AccountIdentifier_3, SubAccount_3],
        [Result_6],
        [],
      ),
    'metadata' : IDL.Func([TokenIdentifier_2], [Result_5], ['query']),
    'mintNFT' : IDL.Func([MintRequest], [TokenIndex], []),
    'payments' : IDL.Func([], [IDL.Opt(IDL.Vec(SubAccount_3))], ['query']),
    'setMinter' : IDL.Func([IDL.Principal], [], []),
    'settle' : IDL.Func([TokenIdentifier_2], [Result_4], []),
    'settlements' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(TokenIndex, AccountIdentifier_3, IDL.Nat64))],
        ['query'],
      ),
    'supply' : IDL.Func([TokenIdentifier_2], [Result_3], ['query']),
    'tokens' : IDL.Func([AccountIdentifier_3], [Result_2], ['query']),
    'transfer' : IDL.Func([TransferRequest], [TransferResponse], []),
  });
  return erc721_token;
};
export const init = ({ IDL }) => { return []; };
(this["webpackJsonpsafe-airdrop"] = this["webpackJsonpsafe-airdrop"] || []).push([
  [0],
  {
    233: function (e) {
      e.exports = JSON.parse(
        '[{"name":"Wrapped Ether","address":"0xc778417E063141139Fce010982780140Aa0cD5Ab","symbol":"WETH","decimals":18,"chainId":4,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xc778417E063141139Fce010982780140Aa0cD5Ab/logo.png"},{"name":"Dai Stablecoin","address":"0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea","symbol":"DAI","decimals":18,"chainId":4,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png"},{"name":"Maker","address":"0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85","symbol":"MKR","decimals":18,"chainId":4,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85/logo.png"},{"name":"Uniswap","address":"0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984","symbol":"UNI","decimals":18,"chainId":4,"logoURI":"ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg"},{"name":"Gnosis Token","address":"0xd0dab4e640d95e9e8a47545598c33e31bdb53c7c","symbol":"GNO","decimals":18,"chainId":4,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6810e776880C02933D47DB1b9fc05908e5386b96/logo.png"},{"name":"OWL Token","address":"0xa7d1c04faf998f9161fc9f800a99a809b84cfc9d","symbol":"OWL","decimals":18,"chainId":4,"logoURI":"https://gnosis-safe-token-logos.s3.amazonaws.com/0xa7D1C04fAF998F9161fC9F800a99A809b84cfc9D.png"},{"name":"Gemini Dollar","address":"0x784b46a4331f5c7c495f296ae700652265ab2fc6","symbol":"GUSD","decimals":2,"chainId":4,"logoURI":"https://gnosis-safe-token-logos.s3.amazonaws.com/0x784B46A4331f5c7C495F296AE700652265ab2fC6.png"},{"name":"USD Coin","address":"0x4dbcdf9b62e891a7cec5a2568c3f4faf9e8abe2b","symbol":"USDC","decimals":6,"chainId":4,"logoURI":"https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png"},{"name":"TrueUSD","address":"0x0000000000085d4780b73119b644ae5ecd22b376","symbol":"TUSD","decimals":18,"chainId":4,"logoURI":"https://gnosis-safe-token-logos.s3.amazonaws.com/0x0000000000085d4780b73119b644ae5ecd22b376.png"}]',
      );
    },
    295: function (e, t) {},
    307: function (e, t) {},
    309: function (e, t) {},
    344: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(77),
        r = n.n(a),
        s = n(29),
        c = n(0),
        o = n.n(c),
        i = n(28),
        u = n.n(i),
        d = n(40),
        b = n(47),
        l = n(226),
        f = n(58),
        p = n(5),
        m = n.n(p),
        x = n(48),
        j = n(53),
        y = n(111),
        v = n(65),
        h = n(227),
        g = n.n(h),
        O = n(71),
        k = n(14),
        w = o.a.createContext({
          messages: [],
          setMessages: function (e) {},
          removeMessage: function (e) {},
          addMessage: function (e) {},
          codeWarnings: [],
          setCodeWarnings: function (e) {},
        }),
        A = function (e) {
          var t = Object(c.useState)([]),
            n = Object(j.a)(t, 2),
            a = n[0],
            r = n[1],
            s = Object(c.useState)([]),
            o = Object(j.a)(s, 2),
            i = o[0],
            u = o[1],
            d = {
              messages: a,
              setMessages: r,
              removeMessage: function (e) {
                return r(
                  a.filter(function (t) {
                    return t.message !== e.message;
                  }),
                );
              },
              addMessage: function (e) {
                a.some(function (t) {
                  return t.message === e.message;
                }) || r([e].concat(Object(O.a)(a)));
              },
              codeWarnings: i,
              setCodeWarnings: u,
            };
          return Object(k.jsx)(w.Provider, { value: d, children: e.children });
        },
        T = n(152),
        C = n(81),
        S = n(232),
        F = n(8),
        D = n(9),
        M = n(31),
        N = n(27),
        E = n(13),
        I = n(12),
        B = n(92),
        R = [
          {
            inputs: [
              { internalType: "string", name: "name_", type: "string" },
              { internalType: "string", name: "symbol_", type: "string" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, internalType: "address", name: "owner", type: "address" },
              { indexed: !0, internalType: "address", name: "spender", type: "address" },
              { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              { indexed: !0, internalType: "address", name: "from", type: "address" },
              { indexed: !0, internalType: "address", name: "to", type: "address" },
              { indexed: !1, internalType: "uint256", name: "value", type: "uint256" },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [{ internalType: "address", name: "account", type: "address" }],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "subtractedValue", type: "uint256" },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        U =
          "0x60806040523480156200001157600080fd5b5060405162000b4b38038062000b4b8339810160408190526200003491620001c1565b81516200004990600390602085019062000068565b5080516200005f90600490602084019062000068565b5050506200027b565b828054620000769062000228565b90600052602060002090601f0160209004810192826200009a5760008555620000e5565b82601f10620000b557805160ff1916838001178555620000e5565b82800160010185558215620000e5579182015b82811115620000e5578251825591602001919060010190620000c8565b50620000f3929150620000f7565b5090565b5b80821115620000f35760008155600101620000f8565b600082601f8301126200011f578081fd5b81516001600160401b03808211156200013c576200013c62000265565b604051601f8301601f19908116603f0116810190828211818310171562000167576200016762000265565b8160405283815260209250868385880101111562000183578485fd5b8491505b83821015620001a6578582018301518183018401529082019062000187565b83821115620001b757848385830101525b9695505050505050565b60008060408385031215620001d4578182fd5b82516001600160401b0380821115620001eb578384fd5b620001f9868387016200010e565b935060208501519150808211156200020f578283fd5b506200021e858286016200010e565b9150509250929050565b600181811c908216806200023d57607f821691505b602082108114156200025f57634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052604160045260246000fd5b6108c0806200028b6000396000f3fe608060405234801561001057600080fd5b50600436106100a95760003560e01c80633950935111610071578063395093511461012357806370a082311461013657806395d89b4114610149578063a457c2d714610151578063a9059cbb14610164578063dd62ed3e14610177576100a9565b806306fdde03146100ae578063095ea7b3146100cc57806318160ddd146100ef57806323b872dd14610101578063313ce56714610114575b600080fd5b6100b66101b0565b6040516100c391906107d8565b60405180910390f35b6100df6100da3660046107af565b610242565b60405190151581526020016100c3565b6002545b6040519081526020016100c3565b6100df61010f366004610774565b610258565b604051601281526020016100c3565b6100df6101313660046107af565b610307565b6100f3610144366004610721565b610343565b6100b6610362565b6100df61015f3660046107af565b610371565b6100df6101723660046107af565b61040a565b6100f3610185366004610742565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6060600380546101bf9061084f565b80601f01602080910402602001604051908101604052809291908181526020018280546101eb9061084f565b80156102385780601f1061020d57610100808354040283529160200191610238565b820191906000526020600020905b81548152906001019060200180831161021b57829003601f168201915b5050505050905090565b600061024f338484610417565b50600192915050565b600061026584848461053b565b6001600160a01b0384166000908152600160209081526040808320338452909152902054828110156102ef5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6102fc8533858403610417565b506001949350505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909161024f91859061033e90869061082b565b610417565b6001600160a01b0381166000908152602081905260409020545b919050565b6060600480546101bf9061084f565b3360009081526001602090815260408083206001600160a01b0386168452909152812054828110156103f35760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016102e6565b6104003385858403610417565b5060019392505050565b600061024f33848461053b565b6001600160a01b0383166104795760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016102e6565b6001600160a01b0382166104da5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016102e6565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b03831661059f5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016102e6565b6001600160a01b0382166106015760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016102e6565b6001600160a01b038316600090815260208190526040902054818110156106795760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016102e6565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906106b090849061082b565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516106fc91815260200190565b60405180910390a350505050565b80356001600160a01b038116811461035d57600080fd5b600060208284031215610732578081fd5b61073b8261070a565b9392505050565b60008060408385031215610754578081fd5b61075d8361070a565b915061076b6020840161070a565b90509250929050565b600080600060608486031215610788578081fd5b6107918461070a565b925061079f6020850161070a565b9150604084013590509250925092565b600080604083850312156107c1578182fd5b6107ca8361070a565b946020939093013593505050565b6000602080835283518082850152825b81811015610804578581018301518582016040015282016107e8565b818111156108155783604083870101525b50601f01601f1916929092016040019392505050565b6000821982111561084a57634e487b7160e01b81526011600452602481fd5b500190565b600181811c9082168061086357607f821691505b6020821081141561088457634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220e3ea3d5f111930ae2bb4c9cdc721d1b844f4cd8ac640676e8a91a65f180e96c964736f6c63430008030033",
        z = (function (e) {
          Object(E.a)(n, e);
          var t = Object(I.a)(n);
          function n(e) {
            return Object(F.a)(this, n), t.call(this, R, U, e);
          }
          return (
            Object(D.a)(
              n,
              [
                {
                  key: "deploy",
                  value: function (e, t, a) {
                    return Object(M.a)(Object(N.a)(n.prototype), "deploy", this).call(this, e, t, a || {});
                  },
                },
                {
                  key: "getDeployTransaction",
                  value: function (e, t, a) {
                    return Object(M.a)(Object(N.a)(n.prototype), "getDeployTransaction", this).call(
                      this,
                      e,
                      t,
                      a || {},
                    );
                  },
                },
                {
                  key: "attach",
                  value: function (e) {
                    return Object(M.a)(Object(N.a)(n.prototype), "attach", this).call(this, e);
                  },
                },
                {
                  key: "connect",
                  value: function (e) {
                    return Object(M.a)(Object(N.a)(n.prototype), "connect", this).call(this, e);
                  },
                },
              ],
              [
                {
                  key: "createInterface",
                  value: function () {
                    return new C.utils.Interface(R);
                  },
                },
                {
                  key: "connect",
                  value: function (e, t) {
                    return new B.b(e, R, t);
                  },
                },
              ],
            ),
            n
          );
        })(B.c);
      (z.bytecode = U), (z.abi = R);
      var W = z.createInterface();
      function L(e, t) {
        return z.connect(e, t);
      }
      var P = n(233),
        _ = new Map([
          [1, "mainnet"],
          [4, "rinkeby"],
          [100, "xdai"],
        ]);
      function G(e) {
        var t,
          n = new Map(),
          a = Object(T.a)(e);
        try {
          for (a.s(); !(t = a.n()).done; ) {
            var r = t.value;
            n.set(C.utils.getAddress(r.address), r);
          }
        } catch (s) {
          a.e(s);
        } finally {
          a.f();
        }
        return n;
      }
      var K = (function () {
        var e = Object(x.a)(
          m.a.mark(function e(t) {
            var n;
            return m.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (1 !== t) {
                      e.next = 9;
                      break;
                    }
                    return (
                      "https://tokens.coingecko.com/uniswap/all.json",
                      (e.next = 4),
                      fetch("https://tokens.coingecko.com/uniswap/all.json")
                    );
                  case 4:
                    return (e.next = 6), e.sent.json();
                  case 6:
                    (n = e.sent.tokens), (e.next = 19);
                    break;
                  case 9:
                    if (4 !== t) {
                      e.next = 13;
                      break;
                    }
                    (n = P), (e.next = 19);
                    break;
                  case 13:
                    if (100 !== t) {
                      e.next = 17;
                      break;
                    }
                    (n = S.tokens), (e.next = 19);
                    break;
                  case 17:
                    throw (
                      (console.error("Unimplemented token list for ".concat(_.get(t), " network")),
                      new Error("Unimplemented token list for ".concat(_.get(t), " network")))
                    );
                  case 19:
                    return e.abrupt("return", G(n));
                  case 20:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        );
        return function (t) {
          return e.apply(this, arguments);
        };
      })();
      function H() {
        var e = Object(a.useSafeAppsSDK)().safe,
          t = Object(c.useState)(new Map()),
          n = Object(j.a)(t, 2),
          r = n[0],
          s = n[1],
          o = Object(c.useState)(!1),
          i = Object(j.a)(o, 2),
          u = i[0],
          d = i[1];
        return (
          Object(c.useEffect)(
            function () {
              var t = !0;
              return (
                d(!0),
                K(e.chainId).then(function (e) {
                  t && (s(e), d(!1));
                }),
                function () {
                  t = !1;
                }
              );
            },
            [e.chainId],
          ),
          { tokenList: r, isLoading: u }
        );
      }
      var J = n(234),
        Q = n(72),
        V = function (e, t, n, a) {
          (function (e, t, n) {
            return $.apply(this, arguments);
          })(
            {
              tokenAddress:
                "" === e.token_address || null === e.token_address
                  ? null
                  : C.utils.isAddress(e.token_address)
                  ? C.utils.getAddress(e.token_address)
                  : e.token_address,
              amount: new Q.BigNumber(e.amount),
              receiver: C.utils.isAddress(e.receiver) ? C.utils.getAddress(e.receiver) : e.receiver,
            },
            t,
            n,
          )
            .then(function (e) {
              return a(null, e);
            })
            .catch(function (e) {
              return a(e);
            });
        },
        X = function (e, t) {
          var n = [].concat(Object(O.a)(q(e)), Object(O.a)(Z(e)), Object(O.a)(Y(e)));
          t(null, 0 === n.length, n.join(";"));
        },
        q = function (e) {
          var t = [];
          return (
            null === e.tokenAddress ||
              C.utils.isAddress(e.tokenAddress) ||
              t.push("Invalid Token Address: " + e.tokenAddress),
            C.utils.isAddress(e.receiver) || t.push("Invalid Receiver Address: " + e.receiver),
            t
          );
        },
        Z = function (e) {
          return e.amount.isGreaterThan(0) ? [] : ["Only positive amounts possible: " + e.amount.toFixed()];
        },
        Y = function (e) {
          return -1 === e.decimals && "TOKEN_NOT_FOUND" === e.symbol
            ? ["No token contract was found at ".concat(e.tokenAddress)]
            : [];
        };
      function $() {
        return ($ = Object(x.a)(
          m.a.mark(function e(t, n, a) {
            var r, s, c, o, i, u, d, b;
            return m.a.wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (!C.utils.isAddress(t.receiver)) {
                      e.next = 4;
                      break;
                    }
                    (e.t0 = [t.receiver, null]), (e.next = 16);
                    break;
                  case 4:
                    return (e.next = 6), a.isEnsEnabled();
                  case 6:
                    if (!e.sent) {
                      e.next = 12;
                      break;
                    }
                    return (e.next = 9), a.resolveName(t.receiver);
                  case 9:
                    (e.t1 = e.sent), (e.next = 13);
                    break;
                  case 12:
                    e.t1 = null;
                  case 13:
                    (e.t2 = e.t1), (e.t3 = t.receiver), (e.t0 = [e.t2, e.t3]);
                  case 16:
                    if (
                      ((r = e.t0),
                      (s = Object(j.a)(r, 2)),
                      (c = s[0]),
                      (o = s[1]),
                      (c = null !== c ? c : t.receiver),
                      null !== t.tokenAddress)
                    ) {
                      e.next = 23;
                      break;
                    }
                    return e.abrupt("return", {
                      receiver: c,
                      amount: t.amount,
                      tokenAddress: t.tokenAddress,
                      decimals: 18,
                      symbol: n.getNativeTokenSymbol(),
                      receiverEnsName: o,
                    });
                  case 23:
                    return (e.next = 25), a.isEnsEnabled();
                  case 25:
                    if (!e.sent) {
                      e.next = 31;
                      break;
                    }
                    return (e.next = 28), a.resolveName(t.tokenAddress);
                  case 28:
                    (e.t4 = e.sent), (e.next = 32);
                    break;
                  case 31:
                    e.t4 = t.tokenAddress;
                  case 32:
                    if (null !== (i = e.t4)) {
                      e.next = 37;
                      break;
                    }
                    (e.t5 = void 0), (e.next = 40);
                    break;
                  case 37:
                    return (e.next = 39), n.getTokenInfo(i);
                  case 39:
                    e.t5 = e.sent;
                  case 40:
                    if ("undefined" === typeof (u = e.t5)) {
                      e.next = 47;
                      break;
                    }
                    return (
                      (d = u.decimals),
                      (b = u.symbol),
                      e.abrupt("return", {
                        receiver: null !== c ? c : t.receiver,
                        amount: t.amount,
                        tokenAddress: i,
                        decimals: d,
                        symbol: b,
                        receiverEnsName: o,
                      })
                    );
                  case 47:
                    return e.abrupt("return", {
                      receiver: null !== c ? c : t.receiver,
                      amount: t.amount,
                      tokenAddress: t.tokenAddress,
                      decimals: -1,
                      symbol: "TOKEN_NOT_FOUND",
                      receiverEnsName: o,
                    });
                  case 48:
                  case "end":
                    return e.stop();
                }
            }, e);
          }),
        )).apply(this, arguments);
      }
      new Q.BigNumber(0), new Q.BigNumber(1);
      var ee = new Q.BigNumber(2),
        te = new Q.BigNumber(10);
      ee.pow(255).minus(1);
      function ne(e, t) {
        var n = te.pow(t).multipliedBy(e);
        return n.decimalPlaces() > 0 && (n = n.decimalPlaces(0, Q.BigNumber.ROUND_DOWN)), n;
      }
      var ae = function (e) {
          return e.reduce(function (e, t) {
            var n = e.get(t.tokenAddress);
            return (
              "undefined" === typeof n &&
                ((n = {
                  tokenAddress: t.tokenAddress,
                  amount: new Q.BigNumber(0),
                  decimals: t.decimals,
                  symbol: t.symbol,
                }),
                e.set(t.tokenAddress, n)),
              (n.amount = n.amount.plus(t.amount)),
              e
            );
          }, new Map());
        },
        re = (function () {
          var e = Object(x.a)(
            m.a.mark(function e(t, n, a) {
              var r, s, c, o, i, u, d, b, l, f, p;
              return m.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (r = []), (s = Object(T.a)(t.values())), (e.prev = 2), s.s();
                      case 4:
                        if ((c = s.n()).done) {
                          e.next = 20;
                          break;
                        }
                        if (
                          ((o = c.value),
                          (i = o.tokenAddress),
                          (u = o.amount),
                          (d = o.decimals),
                          (b = o.symbol),
                          null !== i)
                        ) {
                          e.next = 13;
                          break;
                        }
                        return (e.next = 9), n.getBalance(a.safeAddress, "latest");
                      case 9:
                        (l = e.sent),
                          se(l, u, 18) || r.push({ token: "ETH", transferAmount: u.toFixed() }),
                          (e.next = 18);
                        break;
                      case 13:
                        return (
                          (f = L(C.utils.getAddress(i), n)),
                          (e.next = 16),
                          f.balanceOf(a.safeAddress).catch(function (e) {
                            return console.error(e), v.a.BigNumber.from(-1);
                          })
                        );
                      case 16:
                        (p = e.sent), se(p, u, d) || r.push({ token: b || i, transferAmount: u.toFixed() });
                      case 18:
                        e.next = 4;
                        break;
                      case 20:
                        e.next = 25;
                        break;
                      case 22:
                        (e.prev = 22), (e.t0 = e.catch(2)), s.e(e.t0);
                      case 25:
                        return (e.prev = 25), s.f(), e.finish(25);
                      case 28:
                        return e.abrupt("return", r);
                      case 29:
                      case "end":
                        return e.stop();
                    }
                },
                e,
                null,
                [[2, 22, 25, 28]],
              );
            }),
          );
          return function (t, n, a) {
            return e.apply(this, arguments);
          };
        })(),
        se = function (e, t, n) {
          var a = new Q.BigNumber(e.toString()),
            r = ne(t, n);
          return a.gte(r);
        };
      var ce,
        oe,
        ie,
        ue,
        de,
        be,
        le = n(235),
        fe = n.n(le),
        pe = (n(342), n(343), d.default.div(ce || (ce = Object(b.a)([""])))),
        me = function (e) {
          var t = Object(c.useContext)(w).codeWarnings;
          return Object(k.jsx)(pe, {
            children: Object(k.jsx)(fe.a, {
              onChange: function (t) {
                return e.onChange(t);
              },
              value: e.csvText,
              theme: "tomorrow",
              width: "700px",
              mode: "text",
              minLines: 6,
              maxLines: 20,
              setOptions: { firstLineNumber: 0 },
              showPrintMargin: !1,
              style: {
                borderWidth: 1,
                borderColor: "rgba(0, 0, 0, 0.23)",
                borderRadius: "4px",
                borderStyle: "solid",
                boxShadow: "#F7F5F5 1px 2px 4px 0px",
              },
              markers: t.map(function (e) {
                return {
                  startRow: e.lineNo,
                  endRow: e.lineNo,
                  className: "error-marker",
                  type: "fullLine",
                  startCol: 0,
                  endCol: 30,
                };
              }),
              annotations: t.map(function (e) {
                return { row: e.lineNo, type: "error", column: 0, text: e.message };
              }),
            }),
          });
        },
        xe = n(220),
        je = n(240),
        ye = function (e) {
          var t = e.onChange,
            n = Object(c.useCallback)(
              function (e) {
                e.forEach(function (e) {
                  console.log("Received Filename", e.name);
                  var n = new FileReader();
                  (n.onload = function (e) {
                    e.target && t(e.target.result);
                  }),
                    n.readAsText(e);
                });
              },
              [t],
            ),
            a = Object(je.a)({ maxFiles: 1, onDrop: n, accept: "text/csv" }),
            r = a.getRootProps,
            o = a.getInputProps,
            i = a.isDragActive,
            u = a.isDragAccept,
            d = a.isDragReject,
            b = Object(c.useMemo)(
              function () {
                return Object(f.a)(
                  Object(f.a)(
                    Object(f.a)(Object(f.a)({}, ve.baseStyle), i ? ve.activeStyle : {}),
                    u ? ve.acceptStyle : {},
                  ),
                  d ? ve.rejectStyle : {},
                );
              },
              [i, d, u],
            );
          return Object(k.jsx)("div", {
            children: Object(k.jsxs)(
              "div",
              Object(f.a)(
                Object(f.a)({}, r({ style: b })),
                {},
                {
                  children: [
                    Object(k.jsx)("input", Object(f.a)({}, o())),
                    Object(k.jsxs)("div", {
                      style: { display: "inline-flex", flexDirection: "row", alignItems: "center", gap: "8px" },
                      children: [
                        Object(k.jsx)(s.Button, {
                          size: "md",
                          variant: "contained",
                          color: "primary",
                          component: "span",
                          children: "Upload",
                        }),
                        Object(k.jsx)(s.Text, {
                          center: !0,
                          size: "lg",
                          children: "or drop file here, or paste above",
                        }),
                      ],
                    }),
                  ],
                },
              ),
            ),
          });
        },
        ve = Object(xe.a)({
          baseStyle: {
            lex: 1,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            padding: "20px",
            borderWidth: 2,
            borderRadius: 2,
            width: "660px",
            borderColor: "rgba(0, 0, 0, 0.23)",
            borderStyle: "dashed",
            backgroundColor: "#fafafa",
            color: "#bdbdbd",
            outline: "none",
            transition: "border .24s ease-in-out",
          },
          activeStyle: { borderColor: "#2196f3" },
          acceptStyle: { borderColor: s.theme.colors.primary },
          rejectStyle: { borderColor: s.theme.colors.error },
        }),
        he = d.default.div(
          oe ||
            (oe = Object(b.a)([
              "\n  flex: 1;\n  flex-direction: row;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 8px;\n",
            ])),
        ),
        ge = function (e) {
          var t = e.receiverEnsName,
            n = e.receiverAddress;
          return null !== t
            ? Object(k.jsxs)(he, {
                children: [
                  Object(k.jsx)(s.Text, { size: "md", children: t }),
                  Object(k.jsx)(s.Tooltip, {
                    title: n,
                    children: Object(k.jsx)("span", { children: Object(k.jsx)(s.Icon, { type: "info", size: "sm" }) }),
                  }),
                ],
              })
            : Object(k.jsx)(s.Text, { size: "md", children: n });
        },
        Oe = d.default.div(
          ie ||
            (ie = Object(b.a)([
              "\n  flex: 1;\n  flex-direction: row;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  gap: 8px;\n",
            ])),
        ),
        ke = function (e) {
          var t,
            n = e.tokenAddress,
            a = e.symbol,
            r = H().tokenList;
          return Object(k.jsxs)(Oe, {
            children: [
              Object(k.jsx)("img", {
                alt: "",
                src: null === (t = r.get(n)) || void 0 === t ? void 0 : t.logoURI,
                style: { maxWidth: 20, marginRight: 3, verticalAlign: "middle" },
              }),
              " ",
              Object(k.jsx)(s.Text, { size: "md", children: a || n }),
            ],
          });
        },
        we = function (e) {
          var t = e.transferContent;
          return Object(k.jsx)("div", {
            children: Object(k.jsx)(s.Table, {
              headers: [
                { id: "token", label: "Token" },
                { id: "receiver", label: "Receiver" },
                { id: "amount", label: "Amount" },
              ],
              rows: t.map(function (e, t) {
                return {
                  id: "" + t,
                  cells: [
                    { id: "token", content: Object(k.jsx)(ke, { tokenAddress: e.tokenAddress, symbol: e.symbol }) },
                    {
                      id: "receiver",
                      content: Object(k.jsx)(ge, { receiverAddress: e.receiver, receiverEnsName: e.receiverEnsName }),
                    },
                    { id: "amount", content: Object(k.jsx)(s.Text, { size: "md", children: e.amount.toString() }) },
                  ],
                };
              }),
            }),
          });
        },
        Ae = d.default.div(
          ue ||
            (ue = Object(b.a)([
              "\n  flex: 1;\n  flex-direction: column;\n  display: flex;\n  justify-content: space-around;\n  gap: 8px;\n",
            ])),
        ),
        Te = function (e) {
          var t = Object(c.useState)(!1),
            n = Object(j.a)(t, 2),
            r = n[0],
            o = n[1],
            i = Object(c.useState)([]),
            u = Object(j.a)(i, 2),
            d = u[0],
            b = u[1],
            l = Object(c.useState)("token_address,receiver,amount"),
            p = Object(j.a)(l, 2),
            h = p[0],
            A = p[1],
            T = Object(c.useState)(!1),
            C = Object(j.a)(T, 2),
            S = C[0],
            F = C[1],
            D = Object(c.useContext)(w),
            M = D.setCodeWarnings,
            N = D.setMessages,
            E = Object(a.useSafeAppsSDK)(),
            I = E.safe,
            B = E.sdk,
            R = Object(c.useMemo)(
              function () {
                return new v.a.providers.Web3Provider(new y.SafeAppProvider(I, B));
              },
              [I, B],
            ),
            U = (function () {
              var e = Object(a.useSafeAppsSDK)(),
                t = e.safe,
                n = e.sdk,
                r = Object(c.useMemo)(
                  function () {
                    return new v.a.providers.Web3Provider(new y.SafeAppProvider(t, n));
                  },
                  [n, t],
                ),
                s = H().tokenList;
              return Object(c.useMemo)(
                function () {
                  return {
                    getTokenInfo: (function () {
                      var e = Object(x.a)(
                        m.a.mark(function e(t) {
                          var n, a, c;
                          return m.a.wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  if (!(null === s || void 0 === s ? void 0 : s.has(t))) {
                                    e.next = 4;
                                    break;
                                  }
                                  return e.abrupt("return", s.get(t));
                                case 4:
                                  return (n = L(t, r)), (e.next = 7), n.decimals().catch(function (e) {});
                                case 7:
                                  return (a = e.sent), (e.next = 10), n.symbol().catch(function (e) {});
                                case 10:
                                  if (((c = e.sent), "undefined" === typeof a)) {
                                    e.next = 16;
                                    break;
                                  }
                                  return (
                                    null === s || void 0 === s || s.set(t, { decimals: a, symbol: c, address: t }),
                                    e.abrupt("return", { decimals: a, symbol: c, address: t })
                                  );
                                case 16:
                                  return e.abrupt("return", void 0);
                                case 17:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        }),
                      );
                      return function (t) {
                        return e.apply(this, arguments);
                      };
                    })(),
                    getNativeTokenSymbol: function () {
                      return 100 === t.chainId ? "xDai" : "ETH";
                    },
                  };
                },
                [t.chainId, s, r],
              );
            })(),
            z = (function () {
              var e = Object(a.useSafeAppsSDK)(),
                t = e.safe,
                n = e.sdk,
                r = Object(c.useMemo)(
                  function () {
                    return new v.a.providers.Web3Provider(new y.SafeAppProvider(t, n));
                  },
                  [n, t],
                ),
                s = Object(c.useMemo)(function () {
                  return new Map();
                }, []),
                o = Object(c.useMemo)(function () {
                  return new Map();
                }, []),
                i = Object(c.useCallback)(
                  (function () {
                    var e = Object(x.a)(
                      m.a.mark(function e(t) {
                        var n, a;
                        return m.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!(n = s.get(t))) {
                                  e.next = 5;
                                  break;
                                }
                                (e.t0 = n), (e.next = 8);
                                break;
                              case 5:
                                return (e.next = 7), r.resolveName(t);
                              case 7:
                                e.t0 = e.sent;
                              case 8:
                                return (a = e.t0), s.has(t) || s.set(t, a), e.abrupt("return", a);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [s, r],
                ),
                u = Object(c.useCallback)(
                  (function () {
                    var e = Object(x.a)(
                      m.a.mark(function e(t) {
                        var n, a;
                        return m.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if ("undefined" === typeof (n = o.get(t))) {
                                  e.next = 5;
                                  break;
                                }
                                (e.t0 = n), (e.next = 8);
                                break;
                              case 5:
                                return (e.next = 7), r.lookupAddress(t);
                              case 7:
                                e.t0 = e.sent;
                              case 8:
                                return (a = e.t0), o.has(t) || o.set(t, a), e.abrupt("return", a);
                              case 11:
                              case "end":
                                return e.stop();
                            }
                        }, e);
                      }),
                    );
                    return function (t) {
                      return e.apply(this, arguments);
                    };
                  })(),
                  [o, r],
                ),
                d = Object(c.useCallback)(
                  Object(x.a)(
                    m.a.mark(function e() {
                      var t;
                      return m.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (e.next = 2), r.getNetwork();
                            case 2:
                              return (
                                (t = e.sent),
                                e.abrupt("return", "undefined" !== typeof t.ensAddress && null !== t.ensAddress)
                              );
                            case 4:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    }),
                  ),
                  [r],
                );
              return Object(c.useMemo)(
                function () {
                  return {
                    resolveName: function (e) {
                      return i(e);
                    },
                    lookupAddress: function (e) {
                      return u(e);
                    },
                    isEnsEnabled: (function (e) {
                      function t() {
                        return e.apply(this, arguments);
                      }
                      return (
                        (t.toString = function () {
                          return e.toString();
                        }),
                        t
                      );
                    })(function () {
                      return d();
                    }),
                  };
                },
                [i, u, d],
              );
            })(),
            P = Object(c.useCallback)(
              Object(x.a)(
                m.a.mark(function e() {
                  var t, n, a;
                  return m.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              F(!0),
                              (e.prev = 1),
                              (t = d.map(function (e) {
                                if (null === e.tokenAddress)
                                  return { to: e.receiver, value: ne(e.amount, 18).toFixed(), data: "0x" };
                                var t = e.decimals,
                                  n = ne(e.amount, t);
                                return {
                                  to: e.tokenAddress,
                                  value: "0",
                                  data: W.encodeFunctionData("transfer", [e.receiver, n.toFixed()]),
                                };
                              })),
                              console.log("Encoded ".concat(t.length, " ERC20 transfers.")),
                              (e.next = 6),
                              B.txs.send({ txs: t })
                            );
                          case 6:
                            return (n = e.sent), (e.next = 9), B.txs.getBySafeTxHash(n.safeTxHash);
                          case 9:
                            (a = e.sent), console.log({ safeTx: a }), (e.next = 16);
                            break;
                          case 13:
                            (e.prev = 13), (e.t0 = e.catch(1)), console.error(e.t0);
                          case 16:
                            F(!1);
                          case 17:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 13]],
                  );
                }),
              ),
              [d, B.txs],
            ),
            _ = function (e) {
              A(e), G(e);
            },
            G = Object(c.useMemo)(
              function () {
                return g()(function (e) {
                  o(!0),
                    (function (e, t, n) {
                      return new Promise(function (a, r) {
                        var s = [],
                          c = [];
                        Object(J.parseString)(e, { headers: !0 })
                          .transform(function (e, a) {
                            return V(e, t, n, a);
                          })
                          .validate(function (e, t) {
                            return X(e, t);
                          })
                          .on("data", function (e) {
                            return s.push(e);
                          })
                          .on("end", function () {
                            return a([s, c]);
                          })
                          .on("data-invalid", function (e, t, n) {
                            return c.push.apply(
                              c,
                              Object(O.a)(
                                (function (e, t, n) {
                                  return n.split(";").map(function (e) {
                                    return { message: e, severity: "warning", lineNo: t };
                                  });
                                })(0, t, n),
                              ),
                            );
                          })
                          .on("error", function (e) {
                            return r(e);
                          });
                      });
                    })(e, U, z)
                      .then(
                        (function () {
                          var e = Object(x.a)(
                            m.a.mark(function e(t) {
                              var n, a, r, s;
                              return m.a.wrap(function (e) {
                                for (;;)
                                  switch ((e.prev = e.next)) {
                                    case 0:
                                      if (
                                        ((n = Object(j.a)(t, 2)),
                                        (a = n[0]),
                                        (r = n[1]),
                                        !(
                                          a.reduce(function (e, t) {
                                            return null === t.receiverEnsName ? e.add(t.receiver) : e;
                                          }, new Set()).size < 15
                                        ))
                                      ) {
                                        e.next = 6;
                                        break;
                                      }
                                      return (
                                        (e.next = 5),
                                        Promise.all(
                                          a.map(
                                            (function () {
                                              var e = Object(x.a)(
                                                m.a.mark(function e(t) {
                                                  return m.a.wrap(function (e) {
                                                    for (;;)
                                                      switch ((e.prev = e.next)) {
                                                        case 0:
                                                          if (!t.receiverEnsName) {
                                                            e.next = 4;
                                                            break;
                                                          }
                                                          (e.t0 = t), (e.next = 19);
                                                          break;
                                                        case 4:
                                                          return (
                                                            (e.t1 = f.a),
                                                            (e.t2 = Object(f.a)({}, t)),
                                                            (e.t3 = {}),
                                                            (e.next = 9),
                                                            z.isEnsEnabled()
                                                          );
                                                        case 9:
                                                          if (!e.sent) {
                                                            e.next = 15;
                                                            break;
                                                          }
                                                          return (e.next = 12), z.lookupAddress(t.receiver);
                                                        case 12:
                                                          (e.t4 = e.sent), (e.next = 16);
                                                          break;
                                                        case 15:
                                                          e.t4 = null;
                                                        case 16:
                                                          (e.t5 = e.t4),
                                                            (e.t6 = { receiverEnsName: e.t5 }),
                                                            (e.t0 = (0, e.t1)(e.t2, e.t3, e.t6));
                                                        case 19:
                                                          return e.abrupt("return", e.t0);
                                                        case 20:
                                                        case "end":
                                                          return e.stop();
                                                      }
                                                  }, e);
                                                }),
                                              );
                                              return function (t) {
                                                return e.apply(this, arguments);
                                              };
                                            })(),
                                          ),
                                        )
                                      );
                                    case 5:
                                      a = e.sent;
                                    case 6:
                                      (s = ae(a)),
                                        re(s, R, I).then(function (e) {
                                          return N(
                                            e.map(function (e) {
                                              return {
                                                message: "Insufficient Balance: "
                                                  .concat(e.transferAmount, " of ")
                                                  .concat(e.token),
                                                severity: "warning",
                                              };
                                            }),
                                          );
                                        }),
                                        b(a),
                                        M(r),
                                        o(!1);
                                    case 11:
                                    case "end":
                                      return e.stop();
                                  }
                              }, e);
                            }),
                          );
                          return function (t) {
                            return e.apply(this, arguments);
                          };
                        })(),
                      )
                      .catch(function (e) {
                        return N([{ severity: "error", message: e.message }]);
                      });
                }, 1e3);
              },
              [z, I, M, N, U, R],
            );
          return Object(k.jsx)(s.Card, {
            className: "cardWithCustomShadow",
            children: Object(k.jsxs)(Ae, {
              children: [
                Object(k.jsx)(s.Text, { size: "xl", children: "Upload KDA to ETH Attestation Batch" }),
                Object(k.jsx)(s.Text, { size: "lg", children: "Format: token_address,receiver,amount,decimals" }),
                Object(k.jsx)(me, { csvText: h, onChange: _ }),
                Object(k.jsx)(ye, { onChange: _ }),
                d.length > 0 && Object(k.jsx)(we, { transferContent: d }),
                S
                  ? Object(k.jsxs)(k.Fragment, {
                      children: [
                        Object(k.jsx)(s.Loader, { size: "md" }),
                        Object(k.jsx)("br", {}),
                        Object(k.jsx)(s.Button, {
                          size: "lg",
                          color: "secondary",
                          onClick: function () {
                            return F(!1);
                          },
                          children: "Cancel",
                        }),
                      ],
                    })
                  : Object(k.jsx)(s.Button, {
                      style: { alignSelf: "flex-start" },
                      size: "lg",
                      color: "primary",
                      onClick: P,
                      disabled: r || 0 === d.length,
                      children: r ? Object(k.jsx)(s.Loader, { size: "sm", color: "primaryLight" }) : "Submit",
                    }),
              ],
            }),
          });
        },
        Ce = n(416),
        Se = n(414);
      function Fe(e) {
        return Object(k.jsx)(Se.a, Object(f.a)({ elevation: 6, variant: "filled" }, e));
      }
      var De,
        Me = d.default.div(de || (de = Object(b.a)(["\n  flex: 1;\n  width: 100%;\n"]))),
        Ne = d.default.div(
          be ||
            (be = Object(b.a)([
              "\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  width: 100%;\n",
            ])),
        ),
        Ee = function () {
          var e = Object(c.useContext)(w),
            t = e.messages;
          return Object(k.jsx)(Me, {
            children:
              (null === t || void 0 === t ? void 0 : t.length) > 0 &&
              Object(k.jsx)(Ce.a, {
                anchorOrigin: { vertical: "top", horizontal: "right" },
                open: (null === t || void 0 === t ? void 0 : t.length) > 0,
                onClose: function () {
                  return e.setMessages([]);
                },
                autoHideDuration: 6e3,
                style: { gap: "4px" },
                children: Object(k.jsx)(Ne, {
                  children: t.map(function (t, n) {
                    return Object(k.jsx)(
                      Fe,
                      {
                        severity: t.severity,
                        onClose: function () {
                          return e.removeMessage(t);
                        },
                        children: t.message,
                      },
                      "message" + n,
                    );
                  }),
                }),
              }),
          });
        };
      Object(l.a)(!1);
      var Ie,
        Be = d.default.div(
          De ||
            (De = Object(b.a)([
              "\n  margin-left: 16px;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  justify-content: left;\n  width: 100%;\n",
            ])),
        ),
        Re = function () {
          var e = H().isLoading;
          return Object(k.jsxs)(Be, {
            children: [
              Object(k.jsx)(Ee, {}),
              e
                ? Object(k.jsxs)(k.Fragment, {
                    children: [
                      Object(k.jsx)(s.Loader, { size: "lg" }),
                      Object(k.jsx)(s.Text, { size: "lg", children: "Loading Tokenlist..." }),
                    ],
                  })
                : Object(k.jsx)(Te, {}),
            ],
          });
        },
        Ue = n(237),
        ze = n(238),
        We = n.p + "static/media/error-icon.30ff2119.svg",
        Le = Object(d.createGlobalStyle)(
          Ie ||
            (Ie = Object(b.a)([
              "\n    html {\n        height: 100%\n    }\n\n    body {\n       height: 100%;\n       margin: 0px;\n       padding: 0px;\n    }\n\n    #root {\n        height: 100%;\n        padding-right: 2rem;\n    }\n\n    .MuiFormControl-root,\n    .MuiInputBase-root {\n        width: 100% !important;\n    }\n\n    @font-face {\n        font-family: 'Averta';\n        src: local('Averta'), local('Averta Bold'),\n        url(",
              ") format('woff2'),\n        url(",
              ") format('woff');\n    }\n\n    .error-marker {\n        position: absolute;\n        background-color: lightpink;\n        display: block;\n      }\n    \n    .error-marker:hover::after {\n        content: 'DescriptionTest';\n    }\n    .ace_error {\n        background-image: url(",
              ") !important;\n        background-size: 15px;\n    }\n    .ace_tooltip {\n        font-family: 'Averta' !important;\n    }\n\n    .cardWithCustomShadow {\n        box-shadow: 1px 2px 10px 0.18 #000000;\n        margin-top: 16px;\n    }\n\n    .MuiTableCell-head {\n        position: sticky;\n        top: 0px;\n        background-color: #FFF;\n        box-shadow: 10px 2px 10px 0 #F7F5F5;\n    }\n    .MuiTableContainer-root {\n        overflow: auto;\n        max-height: 750px;\n    }\n\n    .MuiPaper-elevation3 {\n        box-shadow: 0px 3px 3px -2px #F7F5F5,0px 3px 4px 0px #F7F5F5,0px 1px 8px 0px #F7F5F5 !important;\n    }\n",
            ])),
          ze.a,
          Ue.a,
          We,
        );
      u.a.render(
        Object(k.jsx)(o.a.StrictMode, {
          children: Object(k.jsxs)(d.ThemeProvider, {
            theme: s.theme,
            children: [
              Object(k.jsx)(Le, {}),
              Object(k.jsx)(r.a, {
                loader: Object(k.jsxs)(k.Fragment, {
                  children: [
                    Object(k.jsx)(s.Title, { size: "md", children: "Waiting for Safe..." }),
                    Object(k.jsx)(s.Loader, { size: "md" }),
                  ],
                }),
                children: Object(k.jsx)(A, { children: Object(k.jsx)(Re, {}) }),
              }),
            ],
          }),
        }),
        document.getElementById("root"),
      );
    },
  },
  [[344, 1, 2]],
]);
//# sourceMappingURL=main.2cc8ea93.chunk.js.map

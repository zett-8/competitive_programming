import sys
from copy import deepcopy
from collections import deque
sys.setrecursionlimit(20000000)


def main():
    # [品名], [カロリー], [値段], [塩分]
    menu = [
        ['やわらかチキンのサラダ', 134, 2],
        ['半熟卵とポークのサラダ', 433, 5],
        ['ほうれん草のソテー', 80, 2],
        ['フレッシュチーズとトマトのサラダ', 169, 3],
        ['プロシュート(パルマ産熟成生ハム', 225, 4],
        ['辛味チキン', 333, 3],
        ['チョリソー(辛味ソーセージ)', 380, 4],
        ['マルゲリータピザ', 568, 4],
        ['パンチェッタのピザ', 646, 4],
        ['ミートソースボロニア風', 538, 4],
        ['ミラノ風ドリア', 519, 3],
        ['半熟卵のミラノ風ドリア', 609, 3],
        ['柔らかチキンのチーズ焼き', 549, 5],
        ['ミルクジェラート', 100, 1],
        ['イタリアンプリン', 216, 2]
    ]
    # (ファイル読み込み部分は省略)
    yosan = 10

    # dp[i][j] = i番目までの品を使って j円使った時の 最大カロリー
    # menuの添字と違ってややこしいのは、dp[0]を何も食べないときとするので、
    # dp[i][j]のiと日本語のi番目が対応することである。
    # くどいようであるが、i番目の品 = menu[i-1]である。
    # ex: dp[3][500]は3つ目まで(=menuの0~2)の商品を使って、500円まで使える時の最大カロリーを指す
    dp = [[-1 for i in range(yosan + 1)] for j in range(len(menu) + 1)]
    for i in range(len(dp[0])):
        # 初期条件 / 0番目の商品までを使う = 何も食べられない = 何円使っても0カロリー
        dp[0][i] = 0

    # menu[n]を使って、 price円使った時の最大カロリーを順番に求めていく
    for n in range(len(menu)):
        for price in range(yosan + 1):
            # tabeta = n-1までのmenuと, price - menu[n][2]円の状態から、 menu[n]を食べた場合
            # tabenai = n-1までのmenuと, price円の状態
            if price - menu[n][2] >= 0:
                tabeta = dp[n][price - menu[n][2]] + menu[n][1]
                tabenai = dp[n][price]
                if tabeta >= tabenai:
                    dp[n + 1][price] = tabeta
                else:
                    dp[n + 1][price] = tabenai
            # priceがそもそもmenu[n][2]よりも安かったら、menu[n]を食べるという選択肢はないので、1つ前のpriceをそのまま使うほかない
            else:
                dp[n + 1][price] = dp[n][price]

    # 求める答えはlen(menu)番目までの商品を使い、yosan円まで使える時の最大カロリー。
    print(dp[len(menu)][yosan])


if __name__ == '__main__':
    main()


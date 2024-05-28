t = int(input())
for _ in range(t):
    ls = [input() for _ in range(3)]
    winner = None

    # Check rows and columns
    for i in range(3):
        if ls[i][0] == ls[i][1] == ls[i][2] != '.':
            winner = ls[i][0]
            break
        if ls[0][i] == ls[1][i] == ls[2][i] != '.':
            winner = ls[0][i]
            break

    # Check diagonals
    if ls[0][0] == ls[1][1] == ls[2][2] != '.':
        winner = ls[0][0]
    elif ls[0][2] == ls[1][1] == ls[2][0] != '.':
        winner = ls[0][2]

    print(winner if winner else "DRAW")

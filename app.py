def solve():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    idx = 0
    T = int(data[idx])
    idx += 1
    
    for _ in range(T):
        s = data[idx]
        idx += 1
        
        n = len(s)
        sorted_s = ''.join(sorted(s))
        
        if s == sorted_s:
            print("Second")
            continue
        inversions = 0
        ones = 0
        for c in s:
            if c == '1':
                ones += 1
            else:
                inversions += ones
        segments = 0
        i = 0
        while i < n:
            if s[i] == '1':
                j = i
                while j < n and s[j] == '1':
                    j += 1
                if j < n and s[j] == '0':
                    segments += 1
                i = j
            else:
                i += 1
        
        if segments % 2 == 1:
            print("First")
            for i in range(n-1):
                if s[i] > s[i+1]:
                    print(2, i+1, i+2)
                    break
        else:
            print("Second")

if __name__ == "__main__":
    solve()
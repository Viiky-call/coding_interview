	import sys
	def solve():
	    t = int(sys.stdin.readline())
	    for _ in range(t):
	        n = int(sys.stdin.readline())
	        if n < 4 or n % 2 != 0:
	            print(-1)
	            continue
	        half_n = n // 2
	        # 最小飞船数：尽量用 3 (即 B 型的 6/2)
	        min_val = (half_n + 2) // 3
	        if min_val * 3 > half_n:
	            min_val += 1 # 处理余数调整
	        # 最大飞船数：尽量用 2 (即 A 型的 4/2)
	        max_val = (half_n // 3) * 3 
	        if max_val == 0 and half_n >= 2:
	            max_val = 2
	        if min_val > max_val:
	            print(-1)
	        else:
	            print(min_val, max_val)
	solve()
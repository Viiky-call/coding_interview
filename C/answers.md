C1: 调用 /connections 端点。如果返回 200 OK 并包含有效的租户数据，证明 API 连接和 OAuth2 认证均正常工作。
C2: 检查：1) 请求头中是否包含有效的 Authorization Bearer token；2) Xero 租户 ID (Xero-Tenant-Id) 是否正确传递；3) 用于获取 token 的 scope 是否包含读取发票的权限 (如 accounting.transactions)；4) 请求的 URL 拼写和 HTTP 方法是否正确。
C3: 调用 GET /api.xro/2.0/Invoices 来获取发票列表。
C4: 调用 GET /api.xro/2.0/Invoices/{InvoiceID}，在 URL 中传递特定发票的 ID。
C5: 429 表示请求频率超限。后端应：1) 捕获该异常；2) 从响应头中读取 Retry-After 的值；3) 使用指数退避算法或按照 Retry-After 的时间延迟后重试请求；4) 避免立即重试加剧限制。
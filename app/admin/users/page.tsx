import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, UserPlus, MoreHorizontal, Eye, Edit, Trash2 } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function UsersPage() {
  const users = [
    {
      id: "U-001",
      name: "김철수",
      email: "kim@example.com",
      role: "일반 사용자",
      status: "활성",
      lastLogin: "2024-01-20 14:30",
      consultations: 3,
      joinDate: "2023-12-15",
    },
    {
      id: "U-002",
      name: "이영희",
      email: "lee@company.com",
      role: "기업 사용자",
      status: "활성",
      lastLogin: "2024-01-20 13:45",
      consultations: 8,
      joinDate: "2023-11-20",
    },
    {
      id: "U-003",
      name: "박민수",
      email: "park@example.com",
      role: "일반 사용자",
      status: "비활성",
      lastLogin: "2024-01-15 09:20",
      consultations: 1,
      joinDate: "2024-01-10",
    },
    {
      id: "U-004",
      name: "최지원",
      email: "choi@startup.com",
      role: "기업 사용자",
      status: "활성",
      lastLogin: "2024-01-20 16:15",
      consultations: 12,
      joinDate: "2023-10-05",
    },
    {
      id: "U-005",
      name: "정수현",
      email: "jung@example.com",
      role: "일반 사용자",
      status: "정지",
      lastLogin: "2024-01-18 11:30",
      consultations: 0,
      joinDate: "2024-01-18",
    },
  ]

  const userStats = [
    { label: "총 사용자", value: "12,847", change: "+12%" },
    { label: "활성 사용자", value: "9,234", change: "+8%" },
    { label: "기업 사용자", value: "1,456", change: "+15%" },
    { label: "신규 가입", value: "234", change: "+23%" },
  ]

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {userStats.map((stat) => (
          <Card key={stat.label}>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">{stat.label}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-600">{stat.change} 지난 달 대비</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Users Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>사용자 관리</CardTitle>
              <CardDescription>등록된 사용자 목록 및 관리</CardDescription>
            </div>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />새 사용자 추가
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search and Filter */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="사용자 검색..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              필터
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              내보내기
            </Button>
          </div>

          {/* Users Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>사용자 ID</TableHead>
                  <TableHead>이름</TableHead>
                  <TableHead>이메일</TableHead>
                  <TableHead>역할</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead>상담 횟수</TableHead>
                  <TableHead>최근 로그인</TableHead>
                  <TableHead>가입일</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell className="font-medium">{user.id}</TableCell>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant={user.role === "기업 사용자" ? "default" : "secondary"}>{user.role}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.status === "활성" ? "default" : user.status === "비활성" ? "secondary" : "destructive"
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.consultations}</TableCell>
                    <TableCell>{user.lastLogin}</TableCell>
                    <TableCell>{user.joinDate}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            상세 보기
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            수정
                          </DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">
                            <Trash2 className="mr-2 h-4 w-4" />
                            삭제
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <div className="text-sm text-gray-600">총 12,847명 중 1-5명 표시</div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" disabled>
                이전
              </Button>
              <Button variant="outline" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                다음
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
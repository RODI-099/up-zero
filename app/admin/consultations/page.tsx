import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  Filter,
  Download,
  MessageSquarePlus,
  MoreHorizontal,
  Eye,
  Edit,
  Clock,
  AlertTriangle,
  CheckCircle,
} from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function ConsultationsPage() {
  const consultations = [
    {
      id: "C-2024-001",
      type: "몸캠피싱",
      user: "김**",
      email: "kim***@example.com",
      status: "진행중",
      priority: "긴급",
      assignee: "이상담사",
      createdAt: "2024-01-20 14:30",
      updatedAt: "2024-01-20 15:45",
      description: "몸캠피싱 피해 신고 및 긴급 대응 요청",
    },
    {
      id: "C-2024-002",
      type: "딥페이크",
      user: "이**",
      email: "lee***@company.com",
      status: "완료",
      priority: "높음",
      assignee: "박전문가",
      createdAt: "2024-01-20 13:15",
      updatedAt: "2024-01-20 16:20",
      description: "딥페이크 영상 탐지 및 분석 요청",
    },
    {
      id: "C-2024-003",
      type: "일반 보안",
      user: "박**",
      email: "park***@example.com",
      status: "대기",
      priority: "보통",
      assignee: "-",
      createdAt: "2024-01-20 12:45",
      updatedAt: "2024-01-20 12:45",
      description: "개인정보 보호 관련 상담",
    },
    {
      id: "C-2024-004",
      type: "기업 상담",
      user: "삼성전자",
      email: "contact@samsung.com",
      status: "진행중",
      priority: "높음",
      assignee: "최컨설턴트",
      createdAt: "2024-01-20 11:20",
      updatedAt: "2024-01-20 14:30",
      description: "기업용 보안 솔루션 도입 상담",
    },
    {
      id: "C-2024-005",
      type: "교육 문의",
      user: "서울대학교",
      email: "security@snu.ac.kr",
      status: "검토중",
      priority: "보통",
      assignee: "김교육자",
      createdAt: "2024-01-20 10:15",
      updatedAt: "2024-01-20 13:20",
      description: "사이버 보안 교육 프로그램 문의",
    },
  ]

  const consultationStats = [
    { label: "총 상담", value: "1,247", change: "+18%" },
    { label: "진행중", value: "156", change: "+12%" },
    { label: "완료", value: "1,034", change: "+15%" },
    { label: "긴급 대응", value: "23", change: "+45%" },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "완료":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "진행중":
        return <Clock className="h-4 w-4 text-blue-500" />
      case "긴급":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      default:
        return <Clock className="h-4 w-4 text-gray-500" />
    }
  }

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {consultationStats.map((stat) => (
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

      {/* Consultations Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>상담 관리</CardTitle>
              <CardDescription>접수된 상담 요청 목록 및 관리</CardDescription>
            </div>
            <Button>
              <MessageSquarePlus className="mr-2 h-4 w-4" />새 상담 등록
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search and Filter */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="상담 검색..." className="pl-10" />
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

          {/* Consultations Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>상담 ID</TableHead>
                  <TableHead>유형</TableHead>
                  <TableHead>신청자</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead>우선순위</TableHead>
                  <TableHead>담당자</TableHead>
                  <TableHead>접수일</TableHead>
                  <TableHead>최근 업데이트</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {consultations.map((consultation) => (
                  <TableRow key={consultation.id}>
                    <TableCell className="font-medium">{consultation.id}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{consultation.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{consultation.user}</div>
                        <div className="text-sm text-gray-500">{consultation.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(consultation.status)}
                        <Badge
                          variant={
                            consultation.status === "완료"
                              ? "default"
                              : consultation.status === "진행중"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {consultation.status}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          consultation.priority === "긴급"
                            ? "destructive"
                            : consultation.priority === "높음"
                              ? "default"
                              : "secondary"
                        }
                      >
                        {consultation.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>{consultation.assignee}</TableCell>
                    <TableCell>{consultation.createdAt}</TableCell>
                    <TableCell>{consultation.updatedAt}</TableCell>
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
                          <DropdownMenuItem>
                            <MessageSquarePlus className="mr-2 h-4 w-4" />
                            답변 작성
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
            <div className="text-sm text-gray-600">총 1,247건 중 1-5건 표시</div>
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

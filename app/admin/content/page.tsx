import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, Filter, Plus, ImageIcon, Video, MoreHorizontal, Eye, Edit, Trash2, Calendar } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ContentPage() {
  const contentStats = [
    { label: "총 게시물", value: "247", change: "+18%" },
    { label: "매거진 글", value: "89", change: "+12%" },
    { label: "뉴스 기사", value: "156", change: "+25%" },
    { label: "미디어 파일", value: "342", change: "+8%" },
  ]

  const recentContent = [
    {
      id: "A-001",
      title: "2024년 딥페이크 기술 동향과 대응 전략",
      type: "매거진",
      status: "게시됨",
      author: "김보안",
      views: "1,234",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-15",
    },
    {
      id: "A-002",
      title: "몸캠피싱 피해 예방을 위한 5가지 핵심 수칙",
      type: "매거진",
      status: "게시됨",
      author: "이전문가",
      views: "2,156",
      createdAt: "2024-01-10",
      updatedAt: "2024-01-12",
    },
    {
      id: "N-001",
      title: "upoZero, 차세대 딥페이크 탐지 기술로 글로벌 시장 진출",
      type: "뉴스",
      status: "게시됨",
      author: "홍보팀",
      views: "3,421",
      createdAt: "2024-01-20",
      updatedAt: "2024-01-20",
    },
    {
      id: "A-003",
      title: "AI 기반 사이버 보안의 미래",
      type: "매거진",
      status: "초안",
      author: "박연구원",
      views: "0",
      createdAt: "2024-01-18",
      updatedAt: "2024-01-19",
    },
    {
      id: "N-002",
      title: "정부 사이버보안 과제 수주 관련 보도자료",
      type: "뉴스",
      status: "검토중",
      author: "홍보팀",
      views: "0",
      createdAt: "2024-01-19",
      updatedAt: "2024-01-19",
    },
  ]

  const mediaFiles = [
    { name: "deepfake-tech-trends.jpg", type: "이미지", size: "2.4 MB", uploadDate: "2024-01-15" },
    { name: "bodycam-prevention.jpg", type: "이미지", size: "1.8 MB", uploadDate: "2024-01-10" },
    { name: "company-intro-video.mp4", type: "비디오", size: "45.2 MB", uploadDate: "2024-01-08" },
    { name: "ai-cybersecurity.jpg", type: "이미지", size: "3.1 MB", uploadDate: "2024-01-08" },
  ]

  return (
    <div className="space-y-6">
      {/* Content Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {contentStats.map((stat) => (
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

      {/* Content Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>콘텐츠 관리</CardTitle>
              <CardDescription>웹사이트 콘텐츠 작성 및 관리</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button>
                <Plus className="mr-2 h-4 w-4" />새 글 작성
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search and Filter */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="콘텐츠 검색..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              필터
            </Button>
          </div>

          {/* Content Table */}
          <div className="border rounded-lg">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>제목</TableHead>
                  <TableHead>유형</TableHead>
                  <TableHead>상태</TableHead>
                  <TableHead>작성자</TableHead>
                  <TableHead>조회수</TableHead>
                  <TableHead>작성일</TableHead>
                  <TableHead>수정일</TableHead>
                  <TableHead className="w-[50px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentContent.map((content) => (
                  <TableRow key={content.id}>
                    <TableCell className="font-medium max-w-xs">
                      <div className="truncate">{content.title}</div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={content.type === "매거진" ? "default" : "secondary"}>{content.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          content.status === "게시됨" ? "default" : content.status === "초안" ? "secondary" : "outline"
                        }
                      >
                        {content.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{content.author}</TableCell>
                    <TableCell>{content.views}</TableCell>
                    <TableCell>{content.createdAt}</TableCell>
                    <TableCell>{content.updatedAt}</TableCell>
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
                            미리보기
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
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Media Library */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <ImageIcon className="h-5 w-5" />
                  미디어 라이브러리
                </CardTitle>
                <CardDescription>업로드된 이미지 및 미디어 파일</CardDescription>
              </div>
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                업로드
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mediaFiles.map((file) => (
                <div key={file.name} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center space-x-3">
                    {file.type === "이미지" ? (
                      <ImageIcon className="h-5 w-5 text-blue-500" />
                    ) : (
                      <Video className="h-5 w-5 text-purple-500" />
                    )}
                    <div>
                      <div className="font-medium text-sm">{file.name}</div>
                      <div className="text-xs text-gray-500">
                        {file.size} • {file.uploadDate}
                      </div>
                    </div>
                  </div>
                  <Badge variant="outline">{file.type}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>빠른 작업</CardTitle>
            <CardDescription>자주 사용하는 콘텐츠 관리 기능</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3">
              <Button variant="outline" className="justify-start">
                <ImageIcon className="mr-2 h-4 w-4" />새 매거진 글 작성
              </Button>
              <Button variant="outline" className="justify-start">
                <ImageIcon className="mr-2 h-4 w-4" />새 뉴스 기사 작성
              </Button>
              <Button variant="outline" className="justify-start">
                <ImageIcon className="mr-2 h-4 w-4" />
                이미지 업로드
              </Button>
              <Button variant="outline" className="justify-start">
                <Video className="mr-2 h-4 w-4" />
                비디오 업로드
              </Button>
              <Button variant="outline" className="justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                게시 일정 관리
              </Button>
              <Button variant="outline" className="justify-start">
                <Eye className="mr-2 h-4 w-4" />
                사이트 미리보기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}